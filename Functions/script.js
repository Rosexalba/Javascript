
// declaring a function
// function greet(){
//     console.log("Welcome to Javascript")
// }

// greet(); // calling the function




// function greetUser(name) {
//     console.log(`Hello, ${name}!`);
// }

// greetUser("Alice");
// greetUser("Bob");
// greetUser();
// greetUser("Charles");


// Functions with multiple parameters

// function addNumbers(num1,num2,) {
//     console.log(`Sum: ${num1 + num2}`);
// }

// addNumbers(1,2,3);
// addNumbers(5,10); // output:15
// addNumbers(10,10); // output:20



// Arrow Functions and function expressions

// const greet = function (name) {
//     return `Hello, ${name}`;
// };

// console.log(greet("Alice"));
// console.log(greet);

// Arrow functions (shorter syntax)

// const square = (num) => num ** 2;

// console.log(square(5)); // output

//arrow functions with multiple parameters


// () => ()
// const multiply = (a,b) => {
//     return a + b;
// }

// console.log(multiply(3,4)); // output : 7


// Function scope and hoisting

//global variable

// let globalVar = "I am global"

//local variable

// function testScope() {
//     let localVar ="I exist only in this function";
//     console.log(globalVar); // works
//     console.log(localVar); // works
// }

// testScope();
// console.log(globalVar); // works
// console.log(localVar); // Error

// function hoisting


// hello();

// function hello() {
//     console.log("Hello from a function declaration");
// }


 
greet ();
 const greet = function () {
    console.log("HELLO FROM A FUNCTION EXPRESSION")
 }
