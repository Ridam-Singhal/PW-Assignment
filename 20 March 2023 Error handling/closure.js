let score = 4;
function one() {
  const score = 1;
  console.log(score);
}

function two() {
  const score = 2;
  console.log(score);
}

function three() {
  const score = 3;
  console.log(score);
}

// one();
// two();
// three();
// console.log(score);

function outerfunc() {
  let outerVar = "I am scope level 1";
  function innerfunc() {
    let innerVar = "I am scope level 2";
    console.log(outerVar);
  }
  //   console.log(innerVar);
  innerfunc();
}
// outerfunc();

const myGlobalVariable = 0;
function func() {
  console.log(myGlobalVariable);
  function innerOfFunc() {
    let val1 = 1;
    console.log(val1, myGlobalVariable);

    function innerOfInnerFunc() {
      let val2 = 2;
      console.log(val2, val1, myGlobalVariable);
    }
    innerOfInnerFunc();
  }
  innerOfFunc();
}
// func();

// closure

function outer() {
  let outerVar = "I am outer";
  function inner() {
    console.log(outerVar);
  }
  inner();
}
// outer();

const errorMessage = "file not found";

setTimeout(function callback() {
  console.log(errorMessage);
}, 1000);
