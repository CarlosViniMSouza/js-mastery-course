// Examples:

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
