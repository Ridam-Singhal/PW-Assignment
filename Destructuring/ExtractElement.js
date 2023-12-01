// function that can access random element of array
function ExtractElement(array) {
    const [first, second, , ,last] = array
    return [first, second, last]
}

const array = [1, 2, 3, 4, 5];
console.log(ExtractElement(array));

// OUTPUT
// [ 1, 2, 5 ]