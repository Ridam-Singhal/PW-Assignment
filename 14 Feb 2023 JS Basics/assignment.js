// Creating an array of 10 products

let products = ["iPhone","Macbook Pro","Flower Pot","Water Bottle","Shoe","Lens","Mouse","keyboard"];
// console.log(products);

// 3) Creating an object of student registery

const studentRegistry = {
    1 : "Mithun",
    2 : "Alka",
    3 : "Anurag",
    4 : "Prabir",
    5 : "Shivam",
};
// console.log(studentRegistry);

// Variables and typeof 

//Question 1) 

// 1. String
// let var1 = "I am happy";
// console.log("var1 = " ,typeof var1);

// // 2)

// // i) Integer
// let var2 = 10 ;
// console.log("var2 = ", typeof var2);
// // ii) floating value
// let var3 = 10.5 ;
// console.log("var3 = ",typeof var3);
// // iii) Infinity
// let var4 = Number.POSITIVE_INFINITY;
// console.log("var4 = ",typeof var4);
// // iv) Not a number
// let var5 = NaN;
// console.log("var5 = ",typeof var5);
// // v) Bigint 
// let var6 = 102n;
// console.log("var6 = ",typeof var6);

// // 3 Boolean
// let var7 = true ;
// console.log("var7 = ",typeof var7);

// // 4 Undefined 
// let var8 = undefined;
// console.log("var8 = ",typeof var8);

// // 5 Null
// let var9 = null;
// console.log("var9 = ",typeof var9);

// // 6 Symbol
// let var10 = Symbol("Pw skills");
// console.log("var = ",typeof var10);

// console.log(typeof products);
// console.log(typeof studentRegistry);

// Question 2 
let course = "PW Skills" ;
// console.log(course); // OUTPUT : PW Skills

let number = 55 ;
// console.log(number);   // OUTPUT : 55

// let num = PW Skills ;
// console.log(num);  //SyntaxError: Unexpected identifier

// let pum = 13s ;
// console.log(pum); //SyntaxError: Unexpected identifier

// Operators 

// Question 1
let num = 6 ; 
// console.log("6 * 1 = ", num*1);
// console.log("6 * 2 = ", num*2);
// console.log("6 * 3 = ", num*3);
// console.log("6 * 4 = ", num*4);
// console.log("6 * 5 = ", num*5);
// console.log("6 * 6 = ", num*6);
// console.log("6 * 7 = ", num*7);
// console.log("6 * 8 = ", num*8);
// console.log("6 * 9 = ", num*9);
// console.log("6 * 10 = ", num*10);

// Question 2 
let num1 = 10 ;
let num2 = 8 ;
// Addition 
// console.log("The addition of two numbers is ",num1+num2);

// // Subtraction
// console.log("The Subtraction of two numbers is ",num1-num2);

// // Multiplication
// console.log("The Multiplication of two numbers is ",num1*num2);

// // Division
// console.log("The Division of two numbers is ",num1/num2);

// // Modulus
// console.log("The Modulus of two numbers is ",num1%num2);

// // Exponentiation
// console.log("The Exponentiation of two numbers is ",num1**num2);

// Question 3 
let length = 10 ;
let breadth = 20 ;
let perimeterOfTheRectangle = 2 * (length+breadth) ;
// console.log("The perimeter of rectangle is ",perimeterOfTheRectangle);

// Conditions if else if 

// Question 1 

// let trafficlight = "pink" ;
// if (trafficlight == "red") {
//     console.log("Please Stop");
// }
// else if (trafficlight == "green") {
//     console.log("Move Forward");
// }
// else if (trafficlight == "yellow") {
//     console.log("Move Slowly");
// }
// else {
//     console.log("Invalid Entry");
// }

// Question 2 

// let a = 9 ;
// let b = 7 ;
// if (a < b) {
//     console.log("b is greater");
// }
// else {
//     console.log("a is greater");
// }

// Question 3 

// let numbe = 15 ;
// if (numbe % 5 == 0 && numbe % 3 == 0) {
//     console.log("FizzBuzz");
// }
// else if (numbe % 5 == 0) {
//     console.log("Buzz");
// }
// else if (numbe % 3 == 0) {
//     console.log("Fizz");
// }
// else {
//     console.log("Number is Invalid");
// }


// Switch case 

// // Question 1 
// let day = "Thursday" ;

// switch (day)  {
//     case "Monday" :
//         console.log("There are 5 days until weekand");
//         break ;

//     case "Tuesday" :
//         console.log("There are 4 days until weekand");
//         break ;

//     case "Wednesday" :
//         console.log("There are 3 days until weekand");
//         break ;

//     case "Thursday" :
//          console.log("There are 2 days until weekand");
//          break ;

//     case "Friday" :
//         console.log("There are 1 days until weekand");
//         break ;

//     default :
//         console.log("It's weekand");
// }

// Question 2 

let month = 192 ;

// switch(month) {
//     case 1 :
//         console.log("January");
//         break ;
//     case 2 :
//         console.log("Febrary");
//         break ;
//     case 3 :
//         console.log("March");
//         break ;
//     case 4 :
//         console.log("April");
//         break ;
//     case 5 :
//         console.log("May");
//         break ;
//     case 6 :
//         console.log("June");
//         break ;
//     case 7 :
//         console.log("July");
//         break ;
//     case 8 :
//         console.log("August");
//         break ;
//     case 9 :
//         console.log("September");
//         break ;
//     case 10 :
//         console.log("October");
//         break ;
//     case 11 :
//         console.log("November");
//         break ;
//     case 12 :
//         console.log("December");
//         break ;
//     default :
//         console.log("Invalid Number");
// }


// Ternary Operator

// Question 1 
// let number1 = -5 ;

// number1 == 0 ?
// console.log("zero") :
// number1 > 0 ?
// console.log("even") :
// console.log("odd");

// Question 2 
// let int1 = 30 ;
// let int2 = 300 ;

// (int1 > int2) ?
// console.log("int1 is greater") :
// (int1 == int2) ?
// console.log("int1 and int2 is equal") :
// console.log("int2 is greater") ;


// Loops

// Question 1 

// let j = 5 ;
// for (let i = 1 ; i <= 10 ; i++) {
//     console.log(j," * ",i," = ",i*j);
// }

// Question 2 
// let numb = 10 ;
// for (let i = 1 ; i <= numb ; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }