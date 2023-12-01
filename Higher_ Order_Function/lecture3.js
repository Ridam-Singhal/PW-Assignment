// Learning regex

let pattern = 'pw'

let regExOne = new RegExp(pattern)

let flag = 'gi'
let regExTwo = new RegExp(pattern, flag)

let regExThree = /pw/gi

let stringToCheck = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent"

let result = regExThree.test(stringToCheck)
console.log(result);

let anotherResult = stringToCheck.match(regExThree)
console.log(anotherResult);

const oneMoreResult = stringToCheck.replace(regExThree, 'p-w')
console.log(oneMoreResult);