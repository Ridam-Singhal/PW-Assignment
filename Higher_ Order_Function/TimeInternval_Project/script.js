const start = document.querySelector(".start");
const stop = document.querySelector(".hold");

let intervalID; 

// Setting setInterval function
function changeColor() {
  if (!intervalID) intervalID = setInterval(text, 1000);
}

// Calling randomcolor Function
function text() {
  document.getElementById("box").style.color = randomcolor();
  document.getElementById("textarea").innerText = randomcolor()
}

// Creating RandomColor
function randomcolor() {
  const value = "0123456789ABCDEF"
  let cons = "#"
  for(let i = 0; i < 6; i++) {
    cons = cons + value[Math.floor(Math.random() * 16)]
  }
  return cons
}

// Canceling setInterval Function
function stopTextColor() {
  clearInterval(intervalID);

  intervalID = null;
}

start.addEventListener("click", changeColor);
stop.addEventListener("click", stopTextColor);
