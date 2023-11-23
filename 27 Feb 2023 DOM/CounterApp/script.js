const btnIncrease = document.querySelector(".increase");
const btnDecrease = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");
const btnChange = document.querySelector(".changeValue");

let var1 = 0;
let var2 = 1;

// Adding value
btnIncrease.addEventListener("click", () => {
  var1 = var1 + var2;
  document.querySelector(".numberMeter").innerText = var1;
});

// Subtracting value
btnDecrease.addEventListener("click", () => {
  var1 = var1 - var2;
  document.querySelector(".numberMeter").innerText = var1;
});

// Reseting value
btnReset.addEventListener("click", () => {
  var1 = 0;
  document.querySelector(".numberMeter").innerText = var1;
});

// Changing Value
btnChange.addEventListener("click", () => {
  var2 = Number(prompt("Please Enter the value", "0"));

  document.querySelector(".increase").innerText = `Increment by ${var2}`;
  document.querySelector(".decrease").innerText = `Decrement by ${var2}`;
});