"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Define a function with a (Rest parameter) that accept items arguments representing our sandwich
function makeSandwich(...items) {
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\n Now Enjoy Sandwich");
}
// Call the function 3 Items with 3 different numbers of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Mayo", "Butter", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");
