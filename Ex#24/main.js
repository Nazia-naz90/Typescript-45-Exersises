"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define Variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
//Tests for equality and inequality with strings
console.log("Is apple is equal to apple");
console.log(apple == "apple");
console.log("\nIs apple not equal to apple");
console.log(apple != "apple");
//Tests using the lower case function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\n Is apple is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//Numerical tests
// Equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
// Not equal to
console.log("Is ten is not equal to twenty?");
console.log(ten != twenty);
//Greater than 
console.log("\n Is 10 is greater than zero?");
console.log(ten > 0);
// Less than
console.log("\nis twenty is less than 10 ?");
console.log(twenty < ten);
//Greater than or equal to
console.log("\n Is ten is greater than or equal to 5 ? ");
console.log(ten >= 5);
// Less than Or Equal to
console.log("\n Is twenty is less than Or equal to 10 ?");
console.log(twenty <= 10);
//Tests using "and" operators
// Using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
//Test using (OR) operators
//using || (or)
console.log("\n 20 is greater than 50  Or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50  Or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
//Test whether an item is in an array
//Using .include method
console.log("\nIs orange include in my fruits Array ?");
console.log(fruits.includes("orange"));
//Test whether an item is not in an array
//Using ! (not) include
console.log("\nIs orange is not include in my fruits Array ?");
console.log(!fruits.includes("orange"));
