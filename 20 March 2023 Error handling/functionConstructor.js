function Product(n, p, r) {
  this.name = n;
  this.price = p;
  this.rating = r;
}

const p = new Product("Iphone", 100000, 4.5);
console.log(p);
let x = {
  p: Product,
};
x.p("Airbots", 2000, 5);
console.log(x);
