const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).end("hello");
});

app.get("/hello", (req, res, next) => {
  res.status(200).end("hello to");
});
app.listen(3000, () => {
  console.log("server now is running on port 3000");
});
