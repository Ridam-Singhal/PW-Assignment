const clear = document.querySelector(".clear");
const reverseString = document.querySelector(".reverse");

reverseString.addEventListener("click", () => {
  document.getElementById("textarea").innerText = reversedStr(
    prompt("Enter the String")
  );
});

clear.addEventListener("click", () => {
    document.getElementById("textarea").innerText = ""
})

//Fuction reversing array elements using built-in-method
function reversedStr(inputVar) {
  return inputVar.split("").reverse().join("");
}



// Reversing array elements using for loop

// const str = "Ridam Singhal"
// let reversedStr = ""

// for(let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i]
// }

// console.log("Ridam Singhal".split(''));
