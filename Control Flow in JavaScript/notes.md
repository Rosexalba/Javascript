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
    console.log("It is a hot day! Stay hydrated.")
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

   if (isWeekend) {
    console.log("Enjoy your weekend")
   } else {
    console.log("Time to Work!")
   }
