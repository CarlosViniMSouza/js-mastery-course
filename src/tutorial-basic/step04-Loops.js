// Loops
for (var i = 1; i < modelCars.length + 1; i++) { // for any data types
    console.log(`Model num. ${i}: ${modelCars[i - 1]}`);
}

for (var model of modelCars) { // specifically for working with arrays
    console.log(`Model current: ${model}`);
}

let count = 1;

while (count <= modelCars.length) {
    console.log(`Model num. ${count}: ${modelCars[count - 1]}`);
    count++;
}
