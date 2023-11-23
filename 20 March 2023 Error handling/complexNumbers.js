class complexNumber {
  #real;
  #img;
  constructor(r, i) {
    this.#real = r;
    this.#img = i;
  }

  display() {
    console.log(this.#real, " + i", this.#img);
  }

  get real() {
    return this.#real;
  }

  get img() {
    return this.#img;
  }

  addNumbers(c) {
    this.#real += c.real;
    this.#img += c.img;
  }
}

const c = new complexNumber(2, 5);
c.display();
const c1 = new complexNumber(3, 6);
c.addNumbers(c1);
c.display();
