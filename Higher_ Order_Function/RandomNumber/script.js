const generate = document.querySelector(".generate"); 
const enterTime = document.querySelector(".enterTime"); 

// Function to generate a random number
function checkTime(delayTime) {
  let num = delayTime / 1000;

  const id = setInterval(() => {
    console.log("Remaining Time: " + num-- + " sec");

    if (num == 0) {
      console.log("Random Number: ", Math.random());
      clearInterval(id);
    }
  }, 1000); 
} 
generate.addEventListener("click", () => {
  document.getElementById("write").innerText = checkTime(delayTime);
});

enterTime.addEventListener("click", () => {
  delayTime = prompt("Enter the delay time in sec") * 1000
})
