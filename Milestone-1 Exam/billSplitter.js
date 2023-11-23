let bill = 0;
let billper = 0;

function billCalculator(person) {
  for (let i = 1; i < arguments.length; i++) {
    bill = bill + arguments[i];
  }
  billper = bill / person;
  const billInfo = {
    totalBill: bill,
    billPerPerson: billper,
  };
  return billInfo;
}

let result = billCalculator(8, 687, 999, 876, 808);
console.log(result);
