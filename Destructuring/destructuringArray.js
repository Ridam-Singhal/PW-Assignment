// +++++++++++++++++++++++++++++++++++++++++++
// Spread Operator

const oneArray = [1, 2, 3, 4]
const twoArray = [5, 6, 7, 8]

// const threeArray = oneArray.concat(twoArray)
// const threeArray = [oneArray, twoArray]

const threeArray = [...oneArray, ...twoArray]
// console.log(threeArray);

// ++++++++++++++++++++++++++++++++++++++++++
// Rest Operator

function manyArgument() {
    console.log(typeof arguments)
    let args = Array.from(arguments)
    let finalArr = args.map((e) => e)
    console.log(finalArr);
}

function manyArgument2(...args){
    console.log(typeof args);
    let finalArr = args.map(e => e)
    console.log(finalArr);
}

// manyArgument(1,2,3)
// manyArgument2(1,2,3)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Examples

const names = ["superman", "flash"]
const newNames = ["batman", ...names, "thor"]

const siteName = "pwskills"
// console.log([...siteName])

function pwskills(...values) {
    return values
}

// console.log(pwskills("superman", "flash"));