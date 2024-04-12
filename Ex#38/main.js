"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Describe a Function
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country} `);
}
// 1st Calling the function
describe_city("Karachi");
// 2nd Calling the function
describe_city("Lahore");
// 3rd Calling the function
describe_city("Madina", "Saudia Arabia");
