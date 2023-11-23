function addTwoNum(num1, num2) {
  let result = num1 + num2;
  return result;
  console.log("Ridam");
}

const result = addTwoNum(4, 4);
// console.log(result);

function subtractTwoNum(num1, num2) {
  return num1 - num2;
}

// console.log(subtractTwoNum(5, 4));

function registerUser(user = "Richa") {
  if (!user) {
    return "Please pass username";
  }

  return user + " is register at PW";
}

// console.log(registerUser("Ridam"));

// amazon shopping cart

function cartBillTotal(...numbers) {
  // take a variable name total
  let total = 0;
  // loop all values
  for (const num of numbers) {
    total += num;
  }
  // return total
  return total;
}

const user = {
  id: "123",
  name: "Ridam",
  email: "ridam@",
};

function addUser(obj) {
  console.log(`A user name ${obj.name} got a email ${obj.email}`);
}

// addUser(user);

function addTwoNumber(num1, num2) {
  return num1 + num2;
}

const addTwoNumberv2 = (num1, num2) => {
  return num1 + num2;
};

// same as above syntax
const addTwoNumberv3 = (num1, num2) => num1 + num2;

const addTwoNumberv4 = (num1) => 5;

const addTwoNumberv5 = (num1) => ({ email: "ridam@gmail.com" });

const addTwoNumberv6 = (num1, num2) => ({ email: "ridam@gmail.com" });

function learning() {
  console.log(this);
}

const learningTwo = () => {
  console.log(this);
};

learning();
learningTwo();
