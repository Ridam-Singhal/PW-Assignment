// Function removing a duplicate from an array
function removeDuplicate(array) {
    
    return new Set(array)
}

let arr = [1,1,1,2,3,4,2,5,6,5,6,7]
console.log(removeDuplicate(arr)); 

// OUTPUT
// Set(7) { 1, 2, 3, 4, 5, 6, 7 }
