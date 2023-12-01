// Sum numbers using rest operator
function sum(...thisArg) {
    let total = 0
    for(const arg of thisArg) {
        total += arg
    }
    return total
}

// console.log(sum(1, 2, 3, 4, 5))

// +++++++++++++++++++++++++++++++++++++
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
//   myFun("one", "two", "three", "four", "five", "six");

// ++++++++++++++++++++++++++++++++++++++++