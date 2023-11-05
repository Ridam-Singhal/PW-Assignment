const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/random", (req, res) => {
  res.send({ random: Math.floor(Math.random() * 100 + 1) });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
