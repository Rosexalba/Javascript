# Control flow in JavaScript
What will you learn in this lesson?
- Conditonal statements (if,else if, else)
- Loops (for, while, do...while)
- Advanced Loops (forEach, for..of, for...in)
- Mini Project: To-Do List with Loop Operations

# Conditionals: if Statements 
Conditional statements control the flow of a program by executing different blocks of code based on conditions

1. if statement 
- executes a block of code if the condition is true. 

 let temperature = 30;

if (temperature > 25) {
-      console.log("It is a hot day! Stay hydrated.")
}

- console will output the message // It is a hot day! Stay hydrated. because the temperature is 30 and the if statment is saying if the temperature is greater than 25 then the console will log the message. in the case of let temperature = 10 - the message would not be logged because it is not greater than 25.

2. if.. else if .. else

Example:

- const marks = 80;

- if(marks >= 90) {
    console.log('Grade A');
- } else if  (marks >= 80) {
    console.log("Grade: B");
- } else if (marks >= 70) {
    console.log("Grade: C");
 - } else if(marks >= 60) {
    console.log("Grade: D")
- } else {
    console.log("Grade:F")
}

- the console will output Grade:B the way it reads the statments is from top to bottom. once it reaches the correct line of code based on the condition matching the statement it will stop there. it will not read the rest. (it code be the first line)


3. if..else

Example:

   const isWeekend = false;

   - if (isWeekend) {
    - console.log("Enjoy your weekend")
  -  } else {
   -  console.log("Time to Work!")
   }

# Checking for Multiple Conditions (AND and OR operators)
&& ||

- const age = 20;
- const hasDrivingLicense = true;

- if(age >= 18 && hasDrivingLicense) {
   -  console.log("you can drive")
- } else {
  -  console.log("you can not drive")
}

- && both conditions must be true to output 'you can drive' 

|| 
- if(age >= 18 || hasDrivingLicense)

- one condition can be false as long as one is true it will output 'you can drive'

# Ternary Operator
short hand for if else. you check for a condition if that equals on the left hand, if not it goes on the right hand

const isLoggedIn = true;

const msg = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(msg);

- Welcome back will be output by console.

# For Loops
Loops repeat a block of code multiple times 

1. for loop
used when the number iterations is known

Example: 
- for (let i = 0; i<= 5; i++) {
    - console.log("Iternation:", i)
}

Common use:
- const colors = ["Red", "Green", "Blue", "Yellow"];

- for (let i = 0; i < colors.length; i++) {
    - console.log("i=", i);
    - console.log("colors[ i] =", colors [ i]); }

# While loops 
2. for loops
use when the iternation number is unknown
all these loops work very similar - they can all do what each other does but its whatever you prefer. A lot of people use for loops because while loops can get very dangerous 

Example: 

let count = 0;

- while (count<=5) {
    - console.log("count =", count);
    - count++;
}

example:

- let userInput;

- while(userInput !== "yes") {
    - userInput = prompt("Type 'yes' to continue.")
}

console.log("you entered yes")

# Do... While loops
The loop executes once before checking the conditon


let number = 0;

- do {
    - console.log("number=", number);
    - number++;
- } while (number <=5);

Example:

let num;

- do {
   - num = prompt("Enter a number greater than 10");
- } while (num <= 10);

console.log("Thank you.")

do and while loops are dangerous because if you remove your implementation 0 will never change and it will be stuck in a loop going crazy.

