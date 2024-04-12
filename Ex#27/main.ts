//Define variable
// version 1
let alienColor = "green";

// Using if and Else if statement
if(alienColor === "green"){
    console.log("(Version 1) You shot down green alien ! \n\t you have earned 5 points.");
}
else if(alienColor === "yellow"){
    console.log("You shot down yellow alien !  you have earned 10 points.");
   
}
else if(alienColor === "red"){
    console.log("You shot down red alien !  you have earned 15 points.");
}
// Version 2

let alienColor2 = "yellow";

if(alienColor2 === "green"){
    console.log("You shot down green alien !  You earned 5 points");
}
else if(alienColor2 === "yellow"){
    console.log("(Version 2) You shot down yellow alien ! \n\t you have earned 10 points.");
}
else if(alienColor2 === "red"){
    console.log("You shot down alien you have earned 15 points.");
}
// Version 3

let alienColor3 = "red";

if(alienColor3 === "green"){
    console.log(" you shot down green alien ! you have earned 5 points.");   
}
else if(alienColor3 === "yellow"){
    console.log("You shot down yellow alien you have earned 10 points.");
}
else if(alienColor3 === "red"){
console.log("(Version 3) you shot down red alien ! \n\t You have earned 15 points.");
}
