// Test value of array elements
console.log([1, 5, 8, 19, -55].some((x) => x < 1)); // true

// Checking whether a value exists in an array
const fruits = ["apple", "banana", "mango", "guava"];

const check = (arrValue, val) => {
  return arrValue.some((arrValue) => val === arrValue);
};

console.log(check(fruits, "pineapple")); // false


