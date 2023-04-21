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
