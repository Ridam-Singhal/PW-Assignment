let marks = [46, 76, 65, 90, 57];
let highestMarks = marks[0];

for (let i = 0; i <= marks.length; i++) {
  highestMarks < marks[i]
    ? (highestMarks = marks[i])
    : "Wrong data of student numbers";
}

console.log("The highest mark of the student is", highestMarks);
