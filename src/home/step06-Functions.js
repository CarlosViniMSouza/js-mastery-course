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

// Useful Example
function randomInt(min, max) {
    var numVar = max * min + 1;

    console.log(`\nThe difference is ${numVar}`);
}

randomInt(2, 5);
