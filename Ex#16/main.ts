// creating a guest list Array //
let guest_list = ["Sawaira", "Sawaiba", "Hifza", "Ayesha"];

// making variable for those guest who cant come
let dontCome = guest_list[0];

//print the name of guest who cant come
console.log(dontCome, "Cant Come !");

// add or Remove values from Guest list Array
guest_list.splice(0,1, "Ayesha");

// Message print for Bigger Table
console.log("Good news ! We have found a bigger table for Dinner");

// Adding a new value at starting index of Array
guest_list.unshift("Ambreen");

//Adding a new Value at the ending index of Array
guest_list.push("Saima");

//Get a middle index of our guest list  array
let middleIndex: number = Math.floor(guest_list.length / 2);

//Adding a new guest to middle index of Array
guest_list.splice(middleIndex, 0, "Shafaq");

// Print message of Updated list
console.log("Updated List of our Guest");

// Sending an invitation message to our guest one by one with thier names
guest_list.forEach(oneguest => console.log(`Salam, ${oneguest},Would you like to dinner with me ?`));