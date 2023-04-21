// Functions
function upLetters() {
    var oneString = "a message to up!";

    console.log(`String normal: ${oneString}`);
    console.log(`String special: ${oneString.toUpperCase()}`);
}

upLetters();

function returnSum(value1, value2) {
    console.log(`\nThe sum is: ${value1 + value2}`);
}

returnSum(5, 2);

// Math.js
console.log(`The math random: ${Math.random()}`);

// Useful Example 01
function randomInt(min, max) {
    var numVar = max * min + 1;

    console.log(`\nThe difference is ${numVar}`);
}

randomInt(2, 5);

// Useful Example 02

function randomIntImproved(min, max) {
    const numOfValues = max * min - 1;
    const randomNum = Math.random();

    console.log(`Other result: ${randomNum * numOfValues}`);
}

randomIntImproved(4, 8);

// USeful Example 04

function randomIntFinal(min, max) {

    return Math.floor((max - min + 1) * Math.random()) + min;
}

console.log(`Final random result: ${randomIntFinal(10, 18)}`);
