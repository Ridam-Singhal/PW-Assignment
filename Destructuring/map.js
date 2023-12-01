const map1 = new Map()

map1.set('a', 1)
map1.set('b', 2)
map1.set('c', 3)

// console.log(map1.get('a'));

map1.set('a', 97)

// console.log(map1.get('a'));

// console.log(map1.size);

// console.log(map1.delete('b'))

// console.log(map1.size);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const myMap = new Map()

const keyString = "a String"
const keyObj = {}
const keyFunc = function () {}

// Setting the values
myMap.set(keyString, "Value of keyString is 'a string'")
myMap.set(keyObj, "value with keyObj")
myMap.set(keyFunc, "value with keyFunc")

// console.log(myMap.get(keyString));
// console.log(myMap.get(keyObj));
// console.log(myMap.get(keyFunc));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Iterating Map with for...of

const myMap2 = new Map()
myMap2.set(0, "zero")
myMap2.set(1, "one")

for(const [key, values] of myMap2) {
    // console.log(`${key} = ${values}`);
}

for(const key of myMap2.keys()) {
    // console.log(key);
}

for(const values of myMap2.values()) {
    // console.log(values);
}

// Iterating using forEach loop

myMap2.forEach((value, key) => {
    // console.log(key, value);
})

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Relation with Array Objects

const arr = [
    ["key1", "value1"],
    ["key2", "value2"]
]

const newMap = new Map(arr)

newMap.set("key1", "valueChange")

// console.log(Array.from(newMap))

// console.log([...newMap]);

// console.log([...newMap.keys()]);
// console.log([...newMap.values()]);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Cloning and merging Maps

const org = new Map([[1, "one"]])

const clone = new Map(org)

// console.log(clone.get(1));
// console.log(org === clone);

const first = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);
  
  const second = new Map([
    [1, "uno"],
    [2, "dos"],
  ]);

  const merged = new Map([...first, ...second]);

// console.log(merged.get(1)); 
// console.log(merged.get(2));  
// console.log(merged.get(3));  

