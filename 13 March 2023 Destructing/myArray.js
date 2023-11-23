// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// spread

const oneArray = [1, 2, 3, 4];
const twoArray = [5, 6, 7, 8];

const threeArray = [oneArray, twoArray];
// console.log(threeArray[0][2]);

function array() {
  let newArray = [];

  //   for (let i = 0; i <= arguments; i++) {
  //     newArray = newArray + arguments[i];
  //   }
  console.log(arguments[0]);
  console.log(newArray);
}

// array(1, 2, 3, 4);

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];

const arr3 = [...arr1, ...arr2];
// console.log(arr3);
const arr4 = arr2.concat(arr2);
// console.log(arr4);

// const loop = arr1.map((ele) => console.log(ele));
// console.log(loop);

// console.log(...arr1);
const str = "pwskills";
console.log(...str);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Rest

const collect = (...ele) => {
  console.log(ele);
};

// collect(1, 2, 3, 4, 5);

function add(...args) {
  let finalarr = args.map((e) => e);
  console.log(finalarr);
}

add(1, 2, 3, 4);
