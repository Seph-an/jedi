"use strict";
const express = require("express");
// const mysql = require("mysql");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const pages = [
  { route: "/", file: "home" },
  { route: "/home.ejs", file: "home" },
  { route: "/about.ejs", file: "about" },
  { route: "/products.ejs", file: "products" },
  { route: "/contact.ejs", file: "contact" },
  { route: "/checkout.ejs", file: "checkout" },
  { route: "/product.ejs", file: "product" },
  { route: "/interface.ejs", file: "interface" },
  { route: "/navbarFooter.ejs", file: "navbarFooter" },
  { route: "/login.ejs", file: "login" },
];

pages.forEach((page) => {
  app.get(page.route, (req, res) => {
    res.render(page.file);
  });
});

const port = 3000;
// const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
