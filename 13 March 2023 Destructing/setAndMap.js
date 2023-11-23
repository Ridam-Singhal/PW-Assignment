// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// set

let arr1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let mySet = new Set([...arr1]);
mySet.add(8);
mySet.delete(3);
mySet.add({ a: 1, b: 2 });
// console.log(mySet.keys());
// console.log(mySet);

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++
// Map

let myMap = new Map();
myMap.set("a", 23);
myMap.set("b", 33);
myMap.set("c", 43);
myMap.set("d", 53);
myMap.set("a", 93);
myMap.has("a");
console.log(myMap.entries());
