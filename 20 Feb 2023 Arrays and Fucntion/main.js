let arr = [1, 3, 5, "strign", false];
// console.log(arr);
// console.log(arr.length);
// console.log(arr.length - 1);
// console.log(arr[3]);
// arr[3] = 6;
// console.log(arr);

arr.push(5, 5, 7, "string");
// console.log(arr);

arr.pop(3);
// console.log(arr);

let a = arr.shift(1, 2);
// console.log(a);
// console.log(arr);

arr.unshift(5, "alrl");
// console.log(arr);

a1 = [1, 3, 5, 7, 9];
a2 = [2, 4, 6, 8];
a3 = a1.concat(a2);
// console.log(a3);

let s = a3.join("#55");
// console.log(s);

// console.log(a3.indexOf(81));

ar2 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(ar2.slice(1,4));

// console.log(ar2.splice(1,2,11,12,13,14));

function sqr(x) {
  // console.log(x*x);
  // return "Hello everyone !" ;
}

// let aa = sqr(8);
// console.log(aa);

// function message (displayMessage = [1, 3, "string" ,true]) {
//     console.log(displayMessage);
// }

// message("I am happy to learn Full Stack Javascript");
// message("I am enjoying it.");
// message();

function array([num1, num2]) {
  return num1 + num2;
}

let number = [10, 40];

// console.log(array(number));

let sum = 1;
function sumnumber() {
  for (let i = 0; i < arguments.length; i++) {
    sum *= arguments[i];
  }
  return sum;
}

add = sumnumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log("The sum of numbers is",add);

let square = (x) => x * x;
let sq = square(5);
// console.log(sq);/

const addi = (x, y) => {
  console.log(`Adding ${x} and ${y} we get `);
  return x + y;
};
// let ad = addi(5,7);
// console.log(ad);

// let num1 = 7 ;
// for (let i = 1 ; i <= 10 ; i++) {
//     console.log(`${num1} * ${i} = `,num1*i);
// }

let x = function () {
  // console.log("Hi I am Anonymous Function");
  return "h1";
};

// let ass = x();
// console.log(ass);

// (function exe() {
//     console.log("Hello everyone My name is Invoking Function");
// })();

// (function (x) {
//     console.log(x*x)
// }) (5);

// console.log(88);

let person = { car: "Swift", model: 2019, Manufacter: "Maruti Suzuki" };
// console.log(person);

let obj = new Object();
obj.id = 102;
obj.name = "Ridam";
obj.salary = 19000;
// console.log(obj);

function emp(i, n, s) {
  this.id = i;
  this.name = n;
  this.salary = s;
}

let e = new emp(105, "Ridam", 13000);
// console.log(e);

// console.log(obj.id);
// console.log(obj['name']);
// obj['salary'] = 130000;

// obj.id = 555;
// obj["name"] = "Mr. Ridam Singhal";

// delete obj.name;
// console.log(obj);

let keys = Object.keys(obj);
// console.log(keys);

let values = Object.values(obj);
// console.log(values);

let entries = Object.entries(obj);
// console.log(entries);

Object.seal(obj);

obj.id = 555;
obj.address = "Random";
// console.log(obj);

let obj2 = Object.assign({ x: 55 }, obj);
// console.log(obj);

var sum1 = 0;

var arr1 = [10, 15, 20, 30];

arr.forEach(function myFunction(arr1) {
  sum = sum + arr1;
});

console.log(sum);

let name = "name";
