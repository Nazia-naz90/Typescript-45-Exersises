//Making an Array of Countries and print its original order
let CountriesToVisit: string[] =["Madina", "Makkah", "Phlistien", "Iran"];
console.log("Original Order:",CountriesToVisit);

//Print The  Array in Alphabetical order without  modifying the Actual Array List
console.log("Alphabetical order.", [... CountriesToVisit].sort());

//Show that the Array is still in its original order
console.log("Still in Original Order:",CountriesToVisit);

// Print the Array in Reversed Order Without modifying the Actual Array List
console.log("Revers Order:", [...CountriesToVisit].reverse());

//Show that the Array is still in its original order
console.log("Still in Original Order:",CountriesToVisit);

// We have changed the Original Array Order Now
console.log("Original Array Reversed:",CountriesToVisit.reverse());

//Print the Array to show that it's back to its original order
console.log("Back to original order:", CountriesToVisit.reverse());

// Print the Array to show that it's order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", CountriesToVisit.sort());

// We have changed again the original Array order Now in Revers Order Again
console.log("Original Array Reversed Again:",CountriesToVisit.reverse());