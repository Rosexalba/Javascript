# Vocabulary

# JavaScript inline 
 (INSIDE HTML)


# OnClick
The onClick ebent makes the button display an alert when clicked.
Javascript runs inside the browser without extra setup.

Example: 

< body>

    <h1>Welcome to JavaScript</h1>
    <button onclick="alert('Hello JavaScript')">Click Me</button>

# External JavaScript 
to link: place the following insdie < head>

< head>

< script src="script.js">< /script>


inside the .js file type 'console.log' to write a message to the console.

# onLoad

inside .js file onLoad will share a message once the page has loaded

window.onload = function () {

    alert('Welcome to JavaScript')
}

# JavaScript Basics 
- What you will learn
   1. JavaScript Syntax and case sensitivity
   2. variavles and data types
   3. javascript operators
   4. javascript comments and console logging


# Javascript Syntax 
javascript follows specific rules with writing code.
  - statements should end with a semicolon ; optional but reccomended 
  - Code blocks are enclosed within curly braces {}
  - use camelCase for variable and function names (myVariables, fetchData())
  - JavaScript is case-sensitive, so myVar and myvar are different variables 


 # let
 
  is used to declare a variable 

 < script>

        let myVariable= "Hello Javascript";
        console.log(myVariable)

# Variables 
variables store data and are declared using
- var: old method avoid using
- let: for variables that can change 
- const: for variables that dont change 

# Datatypes 
- Strings- "this is a string" 
- numbers- 32
- booleans- true/false
- arrays- [] - this of a bucket the holds other pieces of data 
- objects: {} - they have a key and a value pair ( name: 'john' age:30 )

to declare variables and datatypes

Declaring Example:

< script>

- const name = "Alice"; // string

- const age = "25"; // number

- const isStudent = true; // boolean

- const hobbies = [" Reading","coding","Gaming"] // Array. this 
array has three strings inside

- const person = { firstname: "John", lastname: "Doe"} // Object 

console.log(name, age, isStudent, hobbies, person);


# Operators
Types of operators in JS

# Arithmetic Operators
( +, -, *, /, %, ** )

# Assignment Operators 
( =, +=, -=, *=, /=, %=)
- These will reassign your variables

# Comparisson Operators
(- ==
- ===
- != 
- !== 
- >  
- < 
- >=
- <= )

# Logical Operators
 - && -  "truthy?" 
 - || - OR operator if no variable 
 - ! - if not true operator

< script>

- Arithmetic Operators

    const x = 10;
    const y = 5;

     console.log(x + y); // 15
     console.log(x - y); // 5
     console.log(x * y); // 50
     console.log(x / y); // 2
     console.log(x & y); // 0

-  Comparison Operators 

     console.log(x >y); // true
     console.log(x === "10"); // false
     console.log(x == "10"); // true
     console.log(x !== "10"); // true


