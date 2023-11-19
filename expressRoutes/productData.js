const http = require("http");
const { json } = require("stream/consumers");

const PORT = 5000;

const menProducts = [
  {
    id: 1,
    name: "Men's T-Shirt",
    brand: "Y",
    price: 21.99,
    color: "blue",
    size: "M",
    category: "clothing",
  },
  {
    id: 2,
    name: "Men's Jeans",
    brand: "X",
    price: 10.99,
    color: "blue",
    size: "L",
    category: "clothing",
  },
  {
    id: 3,
    name: "Men's Pant",
    brand: "Z",
    price: 15.99,
    color: "black",
    size: "XL",
    category: "clothing",
  },
  {
    id: 4,
    name: "Men's Watch",
    brand: "A",
    price: 30.99,
    color: "golden",
    category: "accessories",
  },
  {
    id: 5,
    name: "Men's Jacket",
    brand: "B",
    price: 35.99,
    color: "blue",
    size: "M",
    category: "clothing",
  },
  {
    id: 6,
    name: "Men's Shoes",
    brand: "X",
    price: 20.99,
    color: "black",
    size: "M",
    category: "footwear",
  },
  {
    id: 7,
    name: "Men's Coat",
    brand: "Y",
    price: 25.99,
    color: "grey",
    size: "XXL",
    category: "clothing",
  },
  {
    id: 8,
    name: "Men's Shirt",
    brand: "Y",
    price: 21.99,
    color: "blue",
    size: "M",
    category: "clothing",
  },
  {
    id: 9,
    name: "Men's Hood",
    brand: "L",
    price: 28.99,
    color: "green",
    size: "M",
    category: "clothing",
  },
  {
    id: 10,
    name: "Men's T-Shirt",
    brand: "Y",
    price: 21.99,
    color: "blue",
    size: "M",
    category: "clothing",
  },
];

const womenProducts = [
  {
    id: 1,
    name: "Women's T-Shirt",
    brand: "Y",
    price: 21.99,
    color: "blue",
    size: "M",
    category: "clothing",
  },
  {
    id: 2,
    name: "Women's Jeans",
    brand: "X",
    price: 10.99,
    color: "blue",
    size: "L",
    category: "clothing",
  },
  {
    id: 3,
    name: "Women's Pant",
    brand: "Z",
    price: 15.99,
    color: "black",
    size: "XL",
    category: "clothing",
  },
  {
    id: 4,
    name: "Women's Watch",
    brand: "A",
    price: 30.99,
    color: "golden",
    category: "accessories",
  },
  {
    id: 5,
    name: "Women's Jacket",
    brand: "B",
    price: 35.99,
    color: "blue",
    size: "M",
    category: "clothing",
  },
  {
    id: 6,
    name: "Women's Shoes",
    brand: "X",
    price: 20.99,
    color: "black",
    size: "M",
    category: "footwear",
  },
  {
    id: 7,
    name: "Women's Coat",
    brand: "Y",
    price: 25.99,
    color: "grey",
    size: "XXL",
    category: "clothing",
  },
  {
    id: 8,
    name: "Women's Shirt",
    brand: "Y",
    price: 21.99,
    color: "blue",
    size: "M",
    category: "clothing",
  },
  {
    id: 9,
    name: "Women's Hood",
    brand: "L",
    price: 28.99,
    color: "green",
    size: "M",
    category: "clothing",
  },
  {
    id: 10,
    name: "Women's T-Shirt",
    brand: "Y",
    price: 21.99,
    color: "blue",
    size: "M",
    category: "clothing",
  },
];

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.write(`<h1>Welcome to Men & Women Dummy Data</h1>`);
    res.end();
  } else if (req.url == "/men") {
    res.statusCode = 200;
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify(menProducts));
  } else if (req.url == "/women") {
    res.statusCode = 200;
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify(womenProducts));
  } else {
    res.statusCode = 400;
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
