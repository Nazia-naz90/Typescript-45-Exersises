"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Making a function
function make_shirt(size = "Large", printMessage = "I Love Typescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
// Calling a function with by default values
make_shirt();
//Calling a function now with Medium size and default message
make_shirt("Medium");
// Calling a function now with Small size and default message
make_shirt("Small", "I Love Javascript.");
