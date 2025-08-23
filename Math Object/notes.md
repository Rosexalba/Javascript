# Math object  
What you will learn:
- using the built-in javascript maath objext
- common math methods (round,floor,ceil,max,min,abs)
- generating random numbers 
- mini project: random dice roller and game score tracker 
Why use the math object:
- javascripts math object provides built-in mathematical operations
- it is not a constructor (you dont need to create a new math() object ())
- it contains methods (functions) and constant (like math.PI)

# Common math methods

## math.round ()
: rounds a number to the nearest integer

console.log(Math.round(4.6)); // Output : 5
<br/>
console.log(Math.round(4.3)); // Output : 4

## math.floor ()
: rounds a number down to the nearest integer. Basically gets rid of the decimal 

console.log(Math.round(4.6)); // Output : 4
<br/>
console.log(Math.round(4.3)); // Output: 4

## math.ceil ()
: rounds a number up to the nearest integer. goes up a number

console.log(Math.round(4.6)); // Output: 5
<br/>
console.log(Math.round(4.3)); // Output: 5 

# Find the largest/smallest number/absolute value
 
# common methods 

## math.max()
: finds the largest number 

console.log(Math.max(10, 20, 5, 40, 30)); // Output: 40


## math.min()
: finds the smallest number 

console.log(Math.min (10 ,20 , 5, 40, 30)); // Output: 5

## math.abs()
: gets the absolute value of a number : converts negative numbers into positive 


console.log("Math.abs(-10)", Math.abs(-10)); // Output: 10
<br/>
console.log("Math.abs(10)", Math.abs(10)); // Output: 10

# Exponentiation / Square Root of a number 

## Math.pow ()
: to the power of a number 

console.log("Math.pow(2, 3)", Math.pow (2, 3)); // output 8 // 2X2X2
<br/>
console.log("Math.pow(5, 2)", Math.pow (5, 2)); // output 25 //5X5 

- shorthcut 
console.log(2 ** 3) // 8
<br/>
console.log(5 ** 2) // 25


## math.sqrt()
the square root of a number

console.log(Math.sqrt(25)); 5
<br/>
console.log(Math.sqrt(49)); 7 

# mini exercise
- check if the number is a perfect square

const num = 16; 

if(Math.sqrt(num) % 1 === 0) {
    <br/>
    console.log("is a perfect square");
    <br/>
} else {
    <br/>
    console.log("is not a perfect square");
}

// here it will output is  a perfect square because 16 is a s perfect square number

- check if the number is a perfect square in a function 

console.log("function to see if perfect square");

function isPerfectSquare(num) {
    <br/>
    if (Math.sqrt(num) % 1 === 0) return true;
    <br/>
    return false;
}

console.log("isPerfectSquare(10)", isPerfectSquare (10));
<br/>
console.log("isPerfectSquare(16)", isPerfectSquare (16));
<br/>
console.log("isPerfectSquare(25)", isPerfectSquare (25));
<br/>
console.log("isPerfectSquare(27)", isPerfectSquare (27));

- in this example it is checking to see if multiple numbers are perfect squares and it will output true or false depending on if the number is a perfect square number or not prettyy cool.

# Generating random numbers
 
 # math.random()
 : generates random decimal numbers between 0 - 10

 // math.random() generates random decimal number between 0-10
console.log(Math.random());

const randomNum = Math.floor(Math.random() * 10) + 1
<br/>
console.log(randomNum);

function getRandomNumber(min,max) {
<br/>
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNumber(5,10));
<br/>
console.log(getRandomNumber(5,10));

# Project: random dice roller & game score tracker 
- uses math.random to generate random dice rolls
- uses and object the score tracker to store the count of each number
- uses loops
   1. (for loop) to roll the dice multiple times
   2. (for in) to display score results

# Key Takeaways
 - we went over math methods to help with calculations with round, floor, ceil, pow, square root 
 - generarating random numbers is done using math.random
 - and we built a dice roller and the score tracker using loops and objects


