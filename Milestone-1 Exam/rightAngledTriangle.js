// Inverted Right Angled Triangle
let num = 4;

for (let i = 0; i < num; i++) {
  let star = "*";
  for (let j = num - 1; j > i; j--) {
    star += "*";
  }
  console.log(star);
}
