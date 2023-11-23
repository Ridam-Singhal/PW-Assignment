class Product {
  // name;
  // price;
  // rating;

  #rating;
  static custom() {
    console.log("calling the static method");
  }

  constructor(n, p, r) {
    console.log("calling the constructor function");
    this.name = n;
    this.price = p;
    this.#rating = r;
  }

  // getRating() {
  //   console.log(this.#rating);
  // }

  // setRating(r) {
  //   if (r < 0) return;
  //   this.#rating = r;
  // }

  set ratingSetter(r) {
    if (r < 0) return;
    this.#rating = r;
  }

  get ratingGetter() {
    console.log(this.#rating);
  }

  display() {
    console.log(
      "hello I am displaying content.",
      this.name,
      this.price,
      this.#rating
    );
  }
}

const p = new Product("Iphone", 100000, 4.5);
console.log(p);
p.ratingSetter = 10;
p.ratingGetter;
p.display();
Product.custom();
