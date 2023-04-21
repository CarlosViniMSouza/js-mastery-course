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
