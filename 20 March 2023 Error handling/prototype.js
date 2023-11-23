let myHeros = ["thor", "spiderman"];
let dcHeros = ["batman", "flash", "superman"];

let heropower = {
  thor: "hammer",
  spiderman: "sling",

  getSpidermanPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.ridam = function () {
  console.log(`Ridam is present everywhere (omnipresent)`);
};

console.log(myHeros.ridam());
console.log(heropower.ridam());

Array.prototype.heyRidam = function () {
  console.log(`Ridam says hi`);
};

console.log(myHeros.heyRidam());
// console.log(heropower.heyRidam());

// Inheritance

const User = {
  name: "top name",
  email: "top@gmail.com",
};

const Teacher = {
  makeVideos: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TAAssistant = {
  makeAssignment: "JS Assignment",
  fulltime: true,
  __proto__: TeachingSupport,
};

// Teacher.__proto__ = User;

Object.setPrototypeOf(TeachingSupport, Teacher);

// console.log(TAAssistant.isAvailable);
// console.log(Teacher.name);

String.prototype.truelength = function () {
  console.log(`True length is ${this.trim().length}`);
};

"ridam    ".truelength();
"hitesh        ".truelength();
