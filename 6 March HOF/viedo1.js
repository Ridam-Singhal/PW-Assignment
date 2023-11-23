const powerTwo = (n) => {
  return n ** 2;
};

const powerCube = (m) => {
  return powerTwo(m) * m;
};

const powerFour = (x) => {
  return powerCube(x) * powerTwo(x);
};

// let four = powerFour(3);
// console.log("The quadratic is", four);

function sayHello() {
  return (x) => {
    return x * x;
  };
}

let guessValue = sayHello();
// console.log(guessValue);

let store = guessValue(3);
// console.log(store);

const higherOrder = (p) => {
  const oneFun = (n) => {
    const twoFun = (m) => {
      return m + n + p;
    };
    return twoFun;
  };
  return oneFun;
};

// console.log(higherOrder(5)(6)(8));

let myNums = [3, 5, 8, 9];

const sumArray = (arr) => {
  let total = 0;
  arr.forEach((element) => {
    total += element;
  });
  return total;
};

// console.log(sumArray(myNums));

function oneMoreHello() {
  console.log("Hello Ridam !", Math.random());
}

// setInterval(oneMoreHello, 1000);

setTimeout(oneMoreHello, 2000);
