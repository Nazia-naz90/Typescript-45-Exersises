// Define a function to print each magician name from an Array
function show_magicians(magician: string[]){
magician.forEach(name => console.log(name));
}

// Define an Array containing magicians name
let magician_names = ["Harry Potter", "Sanwry", "Junaid"]

// Call the function to print each magician name
show_magicians(magician_names)