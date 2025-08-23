// math.random() generates random decimal number between 0-10
console.log(Math.random());

const randomNum = Math.floor(Math.random() * 10) + 1
console.log(randomNum);

function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNumber(5,10));
console.log(getRandomNumber(5,10));
console.log(getRandomNumber(5,10));
console.log(getRandomNumber(5,10));
console.log(getRandomNumber(5,10));
console.log(getRandomNumber(5,10));
console.log(getRandomNumber(5,10));
console.log(getRandomNumber(5,10));
