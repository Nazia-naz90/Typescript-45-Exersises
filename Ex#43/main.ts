//Define a function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
// Function to make magicians greater through .map() it will modify Array
function make_great(magicians: string[]){
  return magicians.map(name => `The Great ${name}`);
}


// Define an Array of magicians names
let magician_names = ["Harry Potter", "Sawnry", "Junaid"]

// Making a copy of Original Array through .Slice() function

let copy_magician_names = magician_names.slice()

// Modify the copied array to include "The Great" with thier names.

let copy_great_magicians = make_great(copy_magician_names);

// Show both Arrays Original & Copied
//Original
console.log("Original Array\n");
show_magicians(magician_names);

//Copied
console.log("\n Copied Array\n")
show_magicians(copy_great_magicians);