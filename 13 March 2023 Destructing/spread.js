// function sum(x, y, z) {
//   return x + y + z;
// }

const numbers = [1, 2, 3];

// console.log(sum(...numbers));

const str = ["Ridam", "Singhal"];
// console.log(str);
// console.log(...str);

const sum = [...str, ...numbers];
// console.log(sum);

const str1 = "Ridam";
// console.log(...str1);

const arr = [1, 2, 3];
const obj = { ...arr };
// console.log(obj);

function myfun(x, y, z) {
  let sum = x + y + z;
  console.log(sum);
}

const arr1 = [3, 5, 7];
// myfun(...[1, 3, 5]);
