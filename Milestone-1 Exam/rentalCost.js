function rentCalculator(days, carType) {
  let cost;

  if (carType == "Economy") {
    cost = days * 4000;
  } else if (carType == "Midsize") {
    cost = days * 10000;
  } else if (carType == "Luxury") {
    cost = days * 20000;
  }
  return cost;
}

let totalCost = rentCalculator(15, "Economy");
console.log("The total cost of rent car is", totalCost);
