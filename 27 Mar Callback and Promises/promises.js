function createPromises() {
  return new Promise(function exec(resolve, reject) {
    setTimeout(function f() {
      console.log("Timer Done");
      reject("Ridam Singhal");
    }, 2000);
  });
}

console.log("start");
let x = createPromises();
console.log("got a new promise");

x.then(function f(val) {
  console.log("promise done", val);
})
  .catch(function j(val) {
    console.log("Handled", val);
  })
  .finally(function fn() {
    console.log("finally");
  });
console.log("end");

for (let i = 1; i < 1000000000; i++) {}
