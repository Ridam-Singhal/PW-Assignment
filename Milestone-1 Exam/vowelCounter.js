let vowels = ["a", "e", "i", "o", "u"];
let username = "Gouri";
let count = 0;
let j = 0;

for (let i = 0; i < username.length; i++) {
  for (let j = 0; j < username.length; j++) {
    if (username[i].toLowerCase() === vowels[j]) {
      count = count + 1;
    }
  }
}

console.log("The number of vowels are", count);
