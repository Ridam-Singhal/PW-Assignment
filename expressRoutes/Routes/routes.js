const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.json({ msg: "I am home page" });
});

app.get("/about", (req, res) => {
  res.json({ msg: "I am about page" });
});

app.get("/contact", (req, res) => {
  res.json({ email: `support#@pwskills.com` });
});

app.get("/random", (req, res) => {
  res.send({ random: Math.floor(Math.random() * 100 + 1) });
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
