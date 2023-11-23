let pattern = "pw";

let regExOne = new RegExp(pattern);

let flag = "gi";
let regExTwo = new RegExp(pattern, flag);

let regExThree = /pw/gi;

const strToCheck =
  "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent";

let result = regExOne.test(strToCheck);
// console.log(result);

let result1 = regExThree.test(strToCheck);
console.log("The result1 is ", result1);

let result2 = strToCheck.match(regExTwo);
console.log(result2);
