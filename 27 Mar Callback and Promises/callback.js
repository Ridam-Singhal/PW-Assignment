// function h(x, fn) {
//   console.log(x * x);
//   fn(x * x);
// }

// // h(10, function () {
// //   console.log("Calling a callback function");
// // });

// h(10, exec);

// function exec(n) {
//   console.log("The squared value is", n);
// }

console.log("start");
setTimeout(function () {
  console.log("setTimeout function is hof");
}, 2000);
