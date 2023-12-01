// Finding the index of the prime number

const isPrime = (e) => {
    
    if(e % 2 === 0 || e < 2) 
        return false

    for(let factor = 3; factor <= Math.sqrt(e); factor+=2){

        if (e % factor === 0)
            return false
    }
    return true
}

console.log([4, 6, 8, 7, 13, 12].findIndex(isPrime)); // 3

// Only prints the index of first element that is prime 