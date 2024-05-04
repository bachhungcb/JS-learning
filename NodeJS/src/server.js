const express = require("express"); //commonjs
const path = require("path");
require("dotenv").config();

console.log(">>> check env: ", process.env);

const app = express(); // app express
const port = process.env.PORT || 8083; //port => hardcode
const hostname = process.env.HOST_NAME || "localhost";

//configure template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//khai bao route
app.get("/", (req, res) => {
  res.send("Hello World! \n hehehehe");
});

app.get("/abc", (req, res) => {
  res.send("Check ABC");
});

app.get("/bcd", (req, res) => {
  // res.send('<h1>avx</h1>');
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
