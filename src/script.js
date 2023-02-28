// Examples:

let vehicles = [
    "commons", ["chevrolet", "fiat", "peugeot"],
    "suv", ["toyota", "jeep", "chevrolet"],
    "rich", ["ferrari", "lamborghini", "classics"]
];

console.log(`Printing the second element of the third array: ${vehicles[5][1]}`);

console.log('\n');

// For HTML files
var textExample = false;

function showResult() {
    document.write(`txtExample is of type ${typeof(textExample)}`);
}

// Lessons
var animals = ['cat', 'dog', 'duck', 'hedgehog'];

animals.push('bird');

console.log(animals);
console.log(animals.splice(1, 2));
console.log(animals.sort());

console.log('\n');

// Booleans, Operators, Selection:

var happy = true;

if (happy) {
    function userEmotionalState() {
        // do something if happy is 'true'
        document.write(`The User is Happy!`);
    }
} else {
    // do something if happy is 'false'
    function userEmotionalState() {
        document.write(`The User is Sad!`);
    }
}

const myNumber = 12;
const otherNumber = 22;

if (myNumber === otherNumber) {
    console.log(`${myNumber} is equal to ${otherNumber}`);
} else {
    console.log(`${myNumber} is different to ${otherNumber}`);
}

console.log('\n');

const modelCars = ['Common', 'S.U.V.', 'Pick UP', 'Premium', 'Classic'];
let myModelCar = modelCars[3];

if (myModelCar != modelCars[1]) {
    console.log('It\'s Not my model car favorite!');
} else {
    console.log('It\'s my model car favorite!');
}

console.log('\n');

switch (myModelCar) {
    case 'Common': 
        console.log('Not recommended!');
        break;
    case 'S.U.V.': 
        console.log('Very recommended!');
        break;
    case 'Pick Up': 
        console.log('Pure Brute force!');
        break;
    case 'Premium': 
        console.log('Very class & expensive!');
        break;
    case 'Premium': 
        console.log('I loved your choose!');
        break;
    default:
        console.log('Something is wrong!');
}

console.log('\n');

// Loops

for (var i = 1; i < modelCars.length + 1; i++) { // for any data types
    console.log(`Model num. ${i}: ${modelCars[i - 1]}`);
}

console.log('\n');

for (var model of modelCars) { // specifically for working with arrays
    console.log(`Model current: ${model}`);
}

console.log('\n');

let count = 1;

while (count <= modelCars.length) {
    console.log(`Model num. ${count}: ${modelCars[count - 1]}`);
    count++;
}

// Testing any string methods

const myStringTest = "This is a string for get test methods:";

console.log("\n" + myStringTest.toUpperCase());
console.log(myStringTest.search('string'));

console.log("\n");

var formatsText = ['.txt', '.md', '.json', '.xml', '.html'];

for (let eachString of formatsText) {
    console.log(`${myStringTest} ${eachString}`);
}

console.log("\n");

for (let eachString in formatsText) {
    console.log(`Type formatting: ${formatsText[eachString]}`);
}

// Functions

function returnSum(value1, value2) {
    console.log(`\nThe sum is: ${value1 + value2}`);
}

returnSum(5, 2);
