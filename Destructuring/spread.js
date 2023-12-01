// Spread operator example
let sum = (x, y, z) => {
    return x + y + z
}

let numbers = [1, 2, 3]

// console.log(sum(...numbers));

// +++++++++++++++++++++++++++++++++++++++
// Spread Operator does not work here
const obj = {key1: "value1"}
// const array = [...obj]

// +++++++++++++++++++++++++++++++++++++++++
// Array to object
const arr = [1, 2, 3]
const obj2 = {...arr}
// console.log(obj2);

// +++++++++++++++++++++++++++++++++++++++++
// Returing argument as array
function args() {
    return [...arguments]
}

// console.log(args(1,2,3,4,5,6,7))

// +++++++++++++++++++++++++++++++++++++++++++
// Concatenate using spread operator
const num = [1, 2, 3]
const num2 = [4, 5, 6]

const num3 = [...num2, ...num]
console.log(num3);