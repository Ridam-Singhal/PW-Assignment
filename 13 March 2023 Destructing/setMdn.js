const mySet = new Set();

mySet.add(5);
mySet.add(7);
mySet.add("Some Text");

const o = { a: 1, b: 2 };
mySet.add(o);

// console.log(mySet.has(5));
// console.log(mySet.has(o));

console.log(mySet.size);
mySet.clear();
console.log(mySet);
