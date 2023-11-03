"use strict";
const express = require("express");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const mysql = require("mysql");
const multer = require("multer");

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

// Set up Multer storage
const uploadsRoute = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploaded-imgs/"); // Destination folder for uploaded images
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.match(/\.[0-9a-z]+$/i)[0];
    cb(null, `${Date.now()}${ext}`);
  },
});

const upload = multer({
  storage: storage,
  fields: [
    { name: "productName" },
    { name: "product-price" },
    { name: "textarea" },
  ],
});

uploadsRoute.post(
  "/uploads",
  upload.array("product-images"),
  async (req, res) => {
    const files = req.files;
    const data = req.body;

    const productName = data.productName;
    const productPrice = data.productPrice;
    const productDescription = data.textarea;

    const fileData = files.map((file) => ({
      filename: file.filename,
      originalname: file.originalname,
      path: file.path,
    }));

    console.log("Received data:", data);
    console.log("Received files:", fileData);

    try {
      // Begin a MySQL transaction
      pool.getConnection(async (err, connection) => {
        if (err) {
          throw err;
        }

        // Start the transaction
        await new Promise((resolve, reject) => {
          connection.beginTransaction((err) => {
            if (err) {
              connection.release();
              reject(err);
            } else {
              resolve();
            }
          });
        });

        try {
          let productId;
          // Insert data into the `products` table
          const productInsertQuery = `
          INSERT INTO products (product_name, product_price, product_description)
          VALUES (?, ?, ?)
        `;
          const productInsertValues = [
            productName,
            productPrice,
            productDescription,
          ];

          await new Promise((resolve, reject) => {
            connection.query(
              productInsertQuery,
              productInsertValues,
              (err, results) => {
                if (err) {
                  connection.rollback(() => {
                    connection.release();
                    reject(err);
                  });
                } else {
                  productId = results.insertId; // Assign the insertId value to productId
                  resolve(productId);
                  // resolve(results.insertId);
                }
              }
            );
          });

          // Insert data into the `products_images` table for each image
          for (const image of fileData) {
            const imageInsertQuery = `
            INSERT INTO products_images (product_id, image_name, image_original_name, image_path)
            VALUES (?, ?, ?, ?)
          `;
            const imageInsertValues = [
              productId,
              image.filename,
              image.originalname,
              image.path,
            ];

            await new Promise((resolve, reject) => {
              connection.query(imageInsertQuery, imageInsertValues, (err) => {
                if (err) {
                  connection.rollback(() => {
                    connection.release();
                    reject(err);
                  });
                } else {
                  resolve();
                }
              });
            });
          }

          // Commit the transaction
          await new Promise((resolve, reject) => {
            connection.commit((err) => {
              if (err) {
                connection.rollback(() => {
                  connection.release();
                  reject(err);
                });
              } else {
                resolve();
              }
            });
          });

          connection.release();
          console.log("Transaction successfully committed.");

          // Trigger an SSE event to notify clients of new changes
          sendSSEUpdate(res);

          res.status(200).json({ message: "Data uploaded successfully" });
        } catch (err) {
          // Rollback the transaction in case of an error
          connection.rollback(() => {
            connection.release();
            console.error("Transaction rolled back:", err);
            res
              .status(500)
              .json({ error: "An error occurred during data upload." });
          });
        }
      });
    } catch (error) {
      console.error("Upload error:", error.message);
      res.status(500).json({ error: "An error occurred during file upload." });
    }
  }
);

app.use("/products-upload", uploadsRoute);

//load products from db table
app.post("/products", (req, res) => {
  const query = `
   SELECT products.*,
   products_images.image_name, products_images.image_original_name,
   products_images.image_path
   FROM products
   LEFT JOIN products_images ON products.product_id = products_images.product_id;
 `;
  pool.query(query, (err, results) => {
    if (err) {
      console.error("Error querying data:", err);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching data" });
    }

    // Create an object to store the formatted data
    const formattedData = {};

    // Iterate through the 'results' array and group by product_id
    results.forEach((row) => {
      const {
        product_id,
        product_name,
        product_price,
        product_description,
        product_instock,
        product_onoffer,
      } = row;
      const image = {
        image_name: row.image_name,
        image_original_name: row.image_original_name,
        image_path: row.image_path,
      };

      // If the product_id doesn't exist in the formatted data, create an entry
      if (!formattedData[product_id]) {
        formattedData[product_id] = {
          product_id,
          product_name,
          product_price,
          product_description,
          product_instock,
          product_onoffer,
          images: [image], // Create an array for images
        };
      } else {
        // If the product_id already exists, just push the image into the images array
        formattedData[product_id].images.push(image);
      }
    });

    // Convert the formattedData object into an array
    const formattedResult = Object.values(formattedData);

    // Now, formattedResult contains the desired format
    console.log(formattedResult);
    res.status(200).json(formattedResult);
    // ----------------------------------------------
  });
});

//Server-Sent Events (SSE) or WebSocket
// SSE endpoint
app.get("/sse", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");

  // // Send a simple real-time clock update every second
  // const sendTime = () => {
  //   const currentTime = new Date().toLocaleTimeString();
  //   res.write(`data: ${currentTime}\n\n`);
  // };

  // setInterval(sendTime, 1000);
  // sendTime(); // Send the initial time immediately

  // Send a welcome message to the client when they connect
  res.write("data: Welcome to the SSE endpoint\n\n");

  // Close the connection when the client disconnects
  req.on("close", () => {
    clearInterval(sendTime);
  });
});

function sendSSEUpdate(res) {
  // Notify the connected client about the data update
  // Replace this with your actual data update logic
  const updatedData = "New data is available!";
  // Send an SSE event to the client
  res.write(`data: ${updatedData}\n\n`);
}

// const port = 3000;
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});
