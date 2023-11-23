const Product = function (n, p, r) {
  this.name = n;
  this.price = p;
  this.rating = r;
};

const p = new Product("Iphone", 10000, 4.7);
console.log(p);
