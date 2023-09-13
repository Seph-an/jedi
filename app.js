"use strict";
const express = require("express");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const mysql = require("mysql");

const app = express();
require("dotenv").config();

const dbConfig = {
  connectionLimit: 120,
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DATABASE,
};

const pool = mysql.createPool(dbConfig);

// Configuration for express-mysql-session
const sessionStore = new MySQLStore(
  {
    expiration: 48 * 60 * 60 * 1000, // 48 hours in milliseconds
    createDatabaseTable: true,
    schema: {
      tableName: "sessions",
      columnNames: {
        session_id: "session_id",
        expires: "expires",
        data: "data",
      },
    },
  },
  pool
);

// Set up session middleware
app.use(
  session({
    secret: process.env.SESS_SEC,
    store: sessionStore,
    resave: process.env.SESS_RESAVE,
    saveUninitialized: process.env.SESS_SAVE_UNINITIALIZED,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const pages = [
  { route: "/", file: "home" },
  { route: "/about", file: "about" },
  { route: "/products", file: "products" },
  { route: "/contact", file: "contact" },
  { route: "/checkout", file: "checkout" },
  { route: "/product", file: "product" },
  { route: "/interface", file: "interface" },
  { route: "/login", file: "login" },
];
// Middleware to handle rendering with ".ejs" extension
const renderWithEjs = (req, res, next) => {
  const originalRender = res.render;
  res.render = function (view, options, callback) {
    view = view + ".ejs";
    originalRender.call(this, view, options, callback);
  };
  next();
};

app.use(renderWithEjs);

function isAuthenticated(req, res, next) {
  if (req.session && req.session.username) {
    return next();
  }
  res.redirect("/login");
}

pages.forEach((page) => {
  if (page.route === "/interface") {
    app.get(page.route, isAuthenticated, (req, res) => {
      res.render(page.file);
    });
  } else {
    app.get(page.route, (req, res) => {
      res.render(page.file);
    });
  }
});

// app.get("/interface", isAuthenticated, (req, res) => {
//   res.render("interface");
// });

// Login route
app.post("/login", (req, res) => {
  const username = req.body.user;
  const password = req.body.pass;
  // Perform database query to check username and password
  const query = "SELECT * FROM users WHERE user_name = ? AND user_pwd = ?";
  const values = [username, password];
  pool.query(query, values, (error, results) => {
    if (error) {
      console.log("Server error!");
      res.sendStatus(500);
    } else if (results.length === 1) {
      // User found, send username in response
      req.session.username = results[0].user_name;
      console.log("Results:", results);
      console.log("the username is:", results[0].user_name);
      res.json({ username: results[0].username_name });
    } else {
      console.log("Results", results);
      console.log("Something went wrong");
      res.sendStatus(401);
    }
  });
});

// Express.js backend route
app.get("/check-session", (req, res) => {
  if (req.session.username) {
    // User is logged in
    console.log("The username here is:", req.session.username);
    res.status(200).json({ loggedIn: true, username: req.session.username });
  } else {
    // User is not logged in
    res.status(200).json({ loggedIn: false });
  }
});
// Logout route
app.post("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.error("Error destroying session:", error);
      res.status(500).json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});

//Upload product route
app.post("/products", (req, res) => {
  const { productData, imagesData } = req.body;

  // Start a MySQL transaction
  pool.beginTransaction((err) => {
    if (err) {
      console.error("Error starting transaction:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    // Insert data into the Product table
    const insertProductQuery = `INSERT INTO Product (Prod_Name, Prod_Description, Prod_Price_1, Prod_Price_2, Prod_InStock, Prod_OnOffer,Prod_Soon) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    pool.query(
      insertProductQuery,
      [
        productData.Name,
        productData.Description,
        productData.Price1,
        productData.Price2,
        productData.InStock,
        productData.OnOffer,
        productData.Soon,
      ],
      (err, productResult) => {
        if (err) {
          console.error("Error inserting into Product:", err);
          pool.rollback(() => {
            res.status(500).json({ error: "Internal Server Error" });
          });
          return;
        }

        // Get the ProductID of the newly inserted product
        const productId = productResult.insertId;

        // Insert data into the ProductImages table
        const insertProductImagesQuery = `INSERT INTO Images (Product_ID, Image_Path, Image_IsThumbnail, Image_SortOrder) VALUES (?, ?, ?, ?)`;
        pool.query(
          insertProductImagesQuery,
          [
            productId,
            imagesData.ImageURL,
            imagesData.IsThumbnail,
            imagesData.SortOrder,
          ],
          (err, imagesResult) => {
            if (err) {
              console.error("Error inserting into ProductImages:", err);
              pool.rollback(() => {
                res.status(500).json({ error: "Internal Server Error" });
              });
              return;
            }
            // Commit the transaction
            pool.commit((err) => {
              if (err) {
                console.error("Error committing transaction:", err);
                pool.rollback(() => {
                  res.status(500).json({ error: "Internal Server Error" });
                });
              } else {
                console.log("Data inserted successfully");
                res.status(200).json({ message: "Data inserted successfully" });
              }
            });
          }
        );
      }
    );
  });
});

// const port = 3000;
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});
