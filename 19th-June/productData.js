const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    res.statusCode = 200;
    res.write(`<h1>Welcome to Men & Women Dummy Data</h1>`);
    res.end();
  }

  if ((req.url = "/men")) {
    res.statusCode = 200;
    res.write({
      id: 1,
      name: "Men's T-Shirt",
      brand: "Y",
      price: 21.99,
      color: "blue",
      size: "M",
      category: "clothing",
    });
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
