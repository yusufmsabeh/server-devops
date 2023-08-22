import express from "express";
const app = express();

app.get("/v2", (req, res) => {
  res.status(200).end("hello");
});

app.get("/v2/hello", (req, res) => {
  res.status(200).end("hello User");
});

app.get("/v2/time", (req, res) => {
  const now = new Date();
  res.status(200).end("hello User the time is " + now);
});
app.listen(3000, () => {
  console.log("server now is running on port 3000 ");
});
