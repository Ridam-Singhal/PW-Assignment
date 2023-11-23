const obj1 = {
  name: "Yash",
  role: "Student",

  isloggedIn: true,

  registerUser: function () {
    console.log(`${this.name} is a registerUser`);
  },
};

// console.log(obj1.name);
// console.log(obj2.role);

const obj2 = {
  10: "number10",
  20: "number20",
};

const key1 = Symbol("key1");
const key2 = Symbol("key2");

const obj3 = {
  [key1]: "hitesh",
  [key2]: "PWSkills",
};

// console.log(obj3);
// console.log(obj3[key1]);
// console.log(obj3[key2]);

const obj4 = new Object();
obj4.email = "hitesh@pwskills.com";

const obj5 = {
  name: "shreya",
  email: "shreya@google.com",
  isloggedIn: true,
};

Object.freeze(obj5);

obj5.email = "shreya@microsoft.com";
obj5["isloggedIn"] = false;

console.log(Object.isFrozen(obj5));

// console.log(obj5);
// console.log(Object.keys(obj5));
// console.log(Object.values(obj5));
