// Using Set Objects

const mySet = new Set()

mySet.add(1)
mySet.add(5)
mySet.add(5)
mySet.add("some text")

const obj = {a: 1, b: 2}
mySet.add(obj)

mySet.add({a:5, b:6})

// console.log(mySet.has(1))

// console.log(mySet.has(3))

// console.log(mySet.has(Math.sqrt(25)))

// console.log(mySet.has("SOME TEXT".toLowerCase()))

// console.log(mySet.has(obj));

// console.log(mySet.has({a:5, b:6}));


// console.log(mySet.delete(5))

// console.log(mySet);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Iterating Sets

for(const item of mySet) {
    // console.log(item);
}

for(const item of mySet.keys()) {
    // console.log(item);
} 

for(const item of mySet.values()) {
    // console.log(item);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Converting between Set and Array

const myArr = Array.from(mySet)
// console.log(myArr);

const mySet2 = new Set([1, 2, 3, 4]);
// console.log(mySet2.size); 
// console.log([...mySet2])
// console.log(mySet2);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// intersect can be simulated via

const intersection = new Set([...mySet].filter((x) => mySet2.has(x)))

// console.log(intersection);

// difference can be simulated via
const difference = new Set([...mySet].filter((x) => !mySet2.has(x)))

// console.log(difference);

// +++++++++++++++++++++++++++++++++++++++++++++++++
// Remove duplicate elements from an array

const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

// console.log([...new Set(numbers)]);

