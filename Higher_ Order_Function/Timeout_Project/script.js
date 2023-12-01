const showMessage = document.querySelector(".showMessage");
const cancelMessage = document.querySelector(".cancelMessage");
const messageChanged = document.querySelector(".messageChanged");
const clearMessage = document.querySelector(".clearMessage");

let timeoutID;
let message = "That was really slow";

// Setting output
function setOutput(outputContent) {
  document.querySelector(".text").textContent = outputContent;
}

// Showing Message function
showMessage.addEventListener("click", () => {
  timeoutID = setTimeout(setOutput, 2000, message);
});

// Canceling Message function
cancelMessage.addEventListener("click", () => {
  clearTimeout(timeoutID);
});

// Change Message function
messageChanged.addEventListener("click", () => {
  message = prompt("Enter your Message");
});

// Clear Message function
clearMessage.addEventListener("click", () => {
  document.querySelector(".text").textContent = "";
});
