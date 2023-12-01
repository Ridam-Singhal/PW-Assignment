// Converting a for loop to foreach()

const items = [1,2,3,4,5]
const items2 = [6,7,8,9,10]
const copyItems = []

for(let i = 0; i < items.length; i++) {
    copyItems.push(items[i])
}

console.log(copyItems);

// Output
// [ 1, 2, 3, 4, 5 ]

items2.forEach((e) => {
    copyItems.push(e)
})

console.log(copyItems);

// Output
/* 
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
 ] 
*/