let num1 = 15;
let num2 = 20;
let operation = "+";
let result;

switch (operation) {
  case "+":
    result = `The addition of ${num1} + ${num2} is ` + (num1 + num2);
    break;
  case "-":
    result = `The subtraction of ${num1} - ${num2} is ` + (num1 - num2);
    break;
  case "*":
    result = `The multiplication of ${num1} * ${num2} is ` + num1 * num2;
    break;
  case "/":
    result = `The division of ${num1} / ${num2} is ` + num1 / num2;
    break;
  default:
    result = "Invalid operator";
}

console.log(result);
