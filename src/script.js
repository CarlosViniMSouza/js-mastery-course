// Examples:

const objectTest = {
    name: 'Carlos',
    age: 22,
    student: true,
    jobs: [
        'Full Stack Developer', 
        'Software Engineer (in coming)'
    ],
}

let vehicles = [
    "commons", ["chevrolet", "fiat", "peugeot"],
    "suv", ["toyota", "jeep", "chevrolet"],
    "rich", ["ferrari", "lamborghini", "classics"]
];

console.log(`Printing the second element of the third array: ${vehicles[5][1]}`);

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

const modelCars = ['Common', 'S.U.V.', 'Pick UP', 'Premium', 'Classic'];
let myModelCar = modelCars[3];

if (myModelCar != modelCars[1]) {
    console.log('It\'s Not my model car favorite!');
} else {
    console.log('It\'s my model car favorite!');
}

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