function createPromises() {
  return new Promise(function exec(resolve, reject) {
    setTimeout(function f() {
      console.log("Timer Done");
      resolve("Ridam Singhal");
    }, 2000);
  });
}

async function consume() {
  console.log("inside function");
  const response = await createPromises();
  console.log("response is ", response);
}

console.log(consume());
