/* Examples:

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

var textExample = false;

function showResult() {
    document.write(`txtExample is of type ${typeof(textExample)}`);
}

*/

var animals = ['cat', 'dog', 'duck', 'hedgehog'];

animals.push('bird');

console.log(animals);
// output: [ 'cat', 'dog', 'duck', 'hedgehog', 'bird' ]

console.log(animals.splice(1, 2));
// output: [ 'dog', 'duck' ]

console.log(animals.sort());
// output: [ 'bird', 'cat', 'hedgehog' ]
