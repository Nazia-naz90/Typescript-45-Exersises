// Making a function
function make_shirt(size: string = "Large", printMessage:string = "I Love Typescript"){
console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
} 
// Calling a function with by (DEFAULT) values
make_shirt();

//Calling a function now with (MEDIUM) size and default message
make_shirt("Medium")

// Calling a function now with (SMALL) size and default message
make_shirt("Small" , "I Love Javascript.")