let arr = [2, 3, 4];

arr.forEach(function(element, index, arr){
    console.log(index, element, arr);
})

arr.forEach((element, index, arr) => {
    console.log("This is arrow",index, element, arr);
})

const heros = ["naagraj", "doga", "dhruva", "maniraj"]

heros.forEach((e) =>{
    console.log(e.toUpperCase());
})

arr.map((e, index, arr) => {
    console.log(index, e, arr);
})

heros.map((e) => {
    console.log(e.toUpperCase())
})

// filter

console.log(heros);
const herosWithRaj = heros.filter((h) => {
   return h.endsWith("a")
})

console.log(herosWithRaj);

// shopping cart

const cartBill = [20, 30, 50]
const sumOfCartBill = cartBill.reduce((prev, curr) => prev+curr, 0)
console.log(sumOfCartBill);

const gameScore = [200,250, 300, 310, 150, "2"]

//check if all values are numbers
const gameScoreCheck = gameScore.every((v) => typeof v === "number")
console.log("check: ",gameScoreCheck);

//find score above 200

const above200 = gameScore.find((score) => score > 200)

console.log(above200);