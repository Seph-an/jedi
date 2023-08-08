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
  { route: "/about", file: "about" },
  { route: "/products", file: "products" },
  { route: "/contact", file: "contact" },
  { route: "/checkout", file: "checkout" },
  { route: "/product", file: "product" },
  { route: "/interface", file: "interface" },
  { route: "/navbarFooter", file: "navbarFooter" },
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
