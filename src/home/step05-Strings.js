// Testing any string methods
const myStringTest = "This is a string for get test methods:";

console.log("\n" + myStringTest.toUpperCase());
console.log(myStringTest.search('string'));

var formatsText = ['.txt', '.md', '.json', '.xml', '.html'];

for (let eachString of formatsText) {
    console.log(`${myStringTest} ${eachString}`);
}

for (let eachString in formatsText) {
    console.log(`Type formatting: ${formatsText[eachString]}`);
}
