"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Define a function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Function to make magicians greater through .map() it will modify Array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Define an Array of magicians names
let magician_names = ["Harry Potter", "Sawnry", "Junaid"];
// Call make_great function to modify magicians names
let great_magicians = make_great(magician_names);
// Call show magicians function that show modify list of magicians
show_magicians(great_magicians);
