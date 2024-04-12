"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Creating An Array with 5 Values
let userNames = ["Zara", "Admin", "Zoobia", "Sawaira", "Farina"];
// Remove all values from our Array Now our Array is empty
userNames = [];
// If statement for checking Length of our Array is empty?
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    //  If Array is not empty , Use forEach loop on Array
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser},thank you for logging in again.`);
        }
    });
}
