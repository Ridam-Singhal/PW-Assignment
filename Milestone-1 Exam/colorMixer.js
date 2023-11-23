let color1 = "blue";
let color2 = "red";

switch ((color1, color2)) {
  case ("red", "blue"):
  case ("blue", "red"):
    console.log("purple");
    break;

  case ("red", "yellow"):
  case ("yellow", "red"):
    console.log("orange");
    break;

  case ("blue", "yellow"):
  case ("yellow", "blue"):
    console.log("green");
    break;

  default:
    console.log("Invalid Color Combination");
}
