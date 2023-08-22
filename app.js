import express from "express";
const app = express();

app.get("/v3", (req, res) => {
  res.status(200).end("hello");
});

app.get("/v3/hello", (req, res) => {
  res.status(200).end("hello User");
});

app.get("/v3/time", (req, res) => {
  const now = new Date();
  res.status(200).end("hello User the time is " + now);
});
app.get("/hour", (req, res) => {
  const now = new Date();
  res.status(200).end("<h1>hello User the hour is " + now.getHours()+"</h1>");
});
app.listen(3000, () => {
  console.log("server now is running on port 3000 ");
});
