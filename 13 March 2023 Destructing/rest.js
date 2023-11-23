function sum(...values) {
  let total = 0;
  for (const val of values) {
    total += val;
  }
  return total;
}

// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4, 5));

const fun = (a, b, ...args) => {
  console.log("a", a);
  console.log("b", b);
  console.log("args", args);
  return;
};

console.log(fun("one", "two", "three", "four", "five", "six"));
