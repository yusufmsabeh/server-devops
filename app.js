import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).end("hello");
});

app.get("/hello", (req, res) => {
  res.status(200).end("hello User");
});

app.get("/time", (req, res) => {
  const now = new Date();
  res.status(200).end("hello User the time is " + now);
});
app.listen(3000, () => {
  console.log("server now is running on port 3000 ");
});
