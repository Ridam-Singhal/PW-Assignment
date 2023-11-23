function toFahrenheit(temp) {
  let fahrenheit = 1.8 * temp + 32;
  return fahrenheit;
}

let celsius = 1000;
let temperature = toFahrenheit(celsius);
console.log("The temperature in fahrenheit is", temperature);
