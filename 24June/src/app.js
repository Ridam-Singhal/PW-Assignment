import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/instagram", (req, res) => {
  res.send("You have visited instagram");
});

// Contributed by me
app.get("/twitter", (req, res) => {
  res.send("You have visited twitter");
});

app.get("/facebook", (req, res) => {
  res.send("You have visited facebook");
});

app.get("/linkedin", (req, res) => {
  res.send("You have visited linkedin");
});

app.get("/:params", (req, res) => {
  res.send({ params: req.params.params });
});

export default app;
