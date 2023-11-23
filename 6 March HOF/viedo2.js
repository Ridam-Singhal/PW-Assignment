// arrays.forEach((element) => console.log(element));

// arrays.forEach((elt, dex, ary) => console.log(elt, dex, ary));

// arrays.forEach(function (element, index, array) {
//   console.log(element, index, array);
// });

// arrays.forEach((element, index, array) => {
//   console.log("arrows : ", element, index, array);
// });

const heros = ["spiderman", "captain america", "iron man", "hulk"];

// heros.forEach((element) => {
//   console.log(element.charAt(0).toUpperCase() + element.slice(1));
// });

let arrays = [1, 3, 5, 7, 9];

// arrays.map(function (element, index, array) {
//   console.log(element, index, array);
// });

// heros.map((element) => {
//   console.log(element.toUpperCase());
// });

// const result = words.filter((element) => element.endsWith("sh"));
// console.log(result);

const numbers = [12, 38, 93, 56, 77];
function filters(element) {
  return element >= 50;
}

// let result = numbers.filter(filters);
// console.log(result);

const cartBill = [300, 500, 700];
let sum = 0;

const arraySum = cartBill.forEach((element) => {
  sum = sum + element;
  return sum;
});
// console.log(sum);

// const sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr, 0);
// console.log(sumOfCartBill);

const gameScore = [100, 300, 310, 500, 250];
// console.log(typeof gameScore[2]);

const gameScoreCheck = gameScore.every((v) => typeof v === "number");
// console.log(gameScoreCheck);

// const above200 = gameScore.find((score) => score > 300);
// console.log(above200);

const words = ["Ridam", "Nitish", "Rudrash", "Sameer"];

const finds = (element) => element == "Sameer";

// console.log(words.findIndex(finds));

const numb = [1, 4, 5, 7, 9];

const even = (element) => {
  return element % 2 == 0;
};

// console.log(numb.some(even));

const name1 = [2, 4, 6, 8, 20];

const divide = (element) => {
  return element % 7 == 0;
};

// console.log(name1.some(divide));

const num = [67, 48, 29, 10, 33, 77];
words.sort();
console.log(words);
