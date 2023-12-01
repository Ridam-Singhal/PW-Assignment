// Function to count every word occurence
function countWords(str) {
    const words = str.split(" ")
    let map = new Map()

    for(let word of words) {
        if(map.has(word)) {
            map.set(word, map.get(word)+1)
        } else {
            map.set(word, 1)
        } 
    }
    return map
}

const sentence = "Hello Everyone! How are you ?"
console.log(countWords(sentence));

// OUTPUT

// Map(6) {
//     'Hello' => 1,    
//     'Everyone!' => 1,
//     'How' => 1,      
//     'are' => 1,      
//     'you' => 1,
//     '?' => 1
//   }