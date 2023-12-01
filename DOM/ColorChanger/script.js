const btn = document.getElementById("button");

// Function for generating random color
function randomColor() {
  let val = "0123456789ABCDEF";
  let cons = "#";

  for (let i = 0; i < 6; i++) {
    cons = cons + val[Math.floor(Math.random() * 16)];
  }
  return cons;
}

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = randomColor();
  document.getElementById("textarea").innerText = randomColor();
});