// console.log(Math.PI);
// console.log(Math.E)

// common math methods 
// math.round - rounds a number to the nearest integer 
console.log(Math.round(4.6));
console.log(Math.round(4.3));

// Math.floor - rounds down to the nearesr integer : it will just remove the decimal
console.log(Math.floor(4.9)); 
console.log(Math.floor(4));

//math.ciel- rounds up to the nearest integer 
console.log(Math.ceil(4.1));
console.log(Math.ceil(4.9));

// math.max math.min- find the smallest and largest number 
console.log(Math.max(10, 20, 5, 40, 30));
console.log(Math.min (10,20,5, 40,30));

// const num =[1,2,3,4,5,6,7,8,9,10]

//math.abs - gets the absolute value of a number
// converts negative numbers to positive

console.log("Math.abs(-10)", Math.abs(-10));
console.log("Math.abs(10)", Math.abs(10));

//math.pow() to the power of a number 
console.log("Math.pow(2, 3)", Math.pow (2, 3));
console.log("Math.pow(5, 2)", Math.pow (5, 2));

console.log("2 ** 3", 2**3);
console.log("5 ** 2", 5**2);


//math.sqrt - the square root
console.log(Math.sqrt(25)); 5
console.log(Math.sqrt(49)); 7 

// check if a number is a perfect square

const num = 16; 

if(Math.sqrt(num) % 1 === 0) {
    console.log("is a perfect square");
} else {
    console.log("is not a perfect square");
}

// in a function
console.log("function to see if perfect square");

function isPerfectSquare(num) {
    if (Math.sqrt(num) % 1 === 0) return true;
    return false;
}

console.log("isPerfectSquare(10)", isPerfectSquare (10));
console.log("isPerfectSquare(16)", isPerfectSquare (16));
console.log("isPerfectSquare(25)", isPerfectSquare (25));
console.log("isPerfectSquare(27)", isPerfectSquare (27));