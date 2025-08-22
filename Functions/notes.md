# Functions in JavaScript
what will you be learning:  
 - Declaring and calling functions
 - function parameres and return values 
 - function expressions and arrow functions
 - function scope and hoisting
 - mini project 

# Declaring and calling functions
1. Function: function is a block of reusable code that performs a task on call. Functions help reduce repition and make code more manigable

you declare a function 

- function greet(){
   - console.log("Welcome to Javascript")
}

but it wont run anything until you actually invoke or call a function

- greet();

- function is a keyword that defines the function
- greet () is the function name
- the parentheis and semi colon is calling the function

Example with adding parameters (name is the parameter)

- function greetUser(name) {
    - console.log(`Hello, ${name}!);
}

- greetUser("Alice");
- greetUser("Bob");
- greetUser();
- greetUser("Charles");

# Functions with multiple parameters

- function addNumbers(num1,num2) {
    - console.log(`Sum: ${num1 + num2});
}

- addNumbers(5,10) // output:15
- addNumbers(10,10) // output:20

you can add more number 
- function addNumbers(num1,num2, num3) {
- console.log (`Sum: ${num1 + num2 + num3}) }

- addNumbers(1,2,3); // output :6

# Function expressions
function expressions or annonymous functions are a stored function inside a variable

- const greet = function(name) {
    - return `Hello, ${name} ;
}

-console.log(greet("Alice")); // will show an output

-console.log(greet); // will show annonymous function - has no name

- there is no function name because it is annonymous and its stored in the greet variable and its called using the same way greet

# Arrow Functions
is shorter syntax they are a modern way to write functions

const square = (num) => num ** 2;

console.log(square(5)); // output

# Arrow Functions with multiple parameters
need to use curly braces and return must be explicit 

- const multiply = (a,b) => {
    return a + b;
}

- console.log(multiply(3,4));

# Function Scope and Hoisting
scope is a super big thing in javascript. Theres local versus global variable.
1. global variable: which are available everywhere 
- let globalVar = "I am global"

2. local variable: which exist inside a function only.
- function testScope() {
    - let localVar ="I exist only in this function"
}

and if you console.log global var inside of that scope ittl work

- function testScope() {
    - let localVar ="I exist only in this function"
    - console.log(globalVar);
    - console.log(localVar);
}

- testScope()
- console.log(globalVar); // Works
- console.log(localVar); // Error

# Function hoisting
1. function declaration: are hoisted can be called before definintion. 



hello();

function hello() {
    console.log("Hello from a function declaration");
}

2. function expressions like the anonymous function or arrow functions are not hoisted

- greet ();

 - const greet = function () {
    - console.log("HELLO FROM A FUNCTION EXPRESSION")
 }

 - an error will show but if you move it above the greet line then it will output message






