// function for swapping the values of variables
function swapValues(var1, var2) {
    [var1, var2] = [var2, var1]
    return [var1, var2]
}

let x = 20
let y = 30
console.log(swapValues(x,y));

// OUTPUT
// [ 30, 20 ]