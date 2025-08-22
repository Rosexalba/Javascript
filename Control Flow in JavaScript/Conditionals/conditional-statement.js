// if statement

let temperature = 30;

if (temperature > 25) {
    console.log("It is a hot day! Stay hydrated.")
}


// if.. else if.. else

const marks = 80;

if(marks >= 90) {
    console.log('Grade A');
} else if  (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if(marks >= 60) {
    console.log("Grade: D")
} else {
    console.log("Grade:F")
}

// if..else 

   const isWeekend = false;

   if (isWeekend) {
    console.log("Enjoy your weekend")
   } else {
    console.log("Time to Work!")
   }


// checking for multiple conditions with (&&. ||)

const age = 20;
const hasDrivingLicense = false;

if(age >= 18 || hasDrivingLicense) {
    console.log("you can drive")
} else {
    console.log("you can not drive")
}

// Ternary Operator ( ? :)

const isLoggedIn = false;

const msg = isLoggedIn ? "Welcome back!" : "Please log in.";

console.log(msg);