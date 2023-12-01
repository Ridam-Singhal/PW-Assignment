// Function returning a object with minimum and maximum value of array
function maxMin(arr) {
    
    return {
        max: Math.max(...arr),
        min: Math.min(...arr),
    }
}

const array = [5, 2, 7, 1, 9]
console.log(maxMin(array));

// OUTPUT

// { max: 9, min: 1 }
