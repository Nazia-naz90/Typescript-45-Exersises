"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define a function to create a car object with options...
function make_car(manufacturer, model, ...options) {
    // Initialize a car object with manufacturer and model
    const car = {
        manufacturer: manufacturer,
        model: model,
        option: {}
    };
    // Add additional option to the car object
    for (const option of options) {
        for (const key in option) {
            car.option[key] = option[key];
        }
    }
    return car;
}
// Call the function to create a car object
const car = make_car("Toyota", "Corolla", { color: 'blue' }, { sunroof: true });
// Print all the information is stored correctly in the car object
console.log(car);
