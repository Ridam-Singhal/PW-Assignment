let totalCost = 0;
let products = [
  {
    name: "Mouse",
    unitPrice: 40,
    quantity: 15,
  },
  {
    name: "Keyboard",
    unitPrice: 25,
    quantity: 10,
  },
  {
    name: "Monitor",
    unitPrice: 500,
    quantity: 30,
  },
];

for (let i = 0; i < products.length - 1; i++) {
  let cost;
  for (let j of products) {
    cost = unitPrice * quantity;
  }
  totalCost = totalCost + cost;
}

console.log(totalCost);
