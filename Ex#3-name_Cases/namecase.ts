// LOWERCASE //
let personName:string="Nazia Naz"
console.log("lowercase:",personName.toLocaleLowerCase());

// UPPER CASE //

console.log("uppercase:",personName.toUpperCase());

//TITLE CASE //

console.log("titlecase:" , personName.replace(/\b\w/g, (char) => char.toUpperCase()));