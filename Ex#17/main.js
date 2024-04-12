"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// creating a guest list Array //
let guest_list = ["Sawaira", "Sawaiba", "Hifza", "Ayesha"];
// making variable for those guest who cant come
let dontCome = guest_list[0];
//print the name of guest who cant come
console.log(dontCome, "Cant Come !");
// add or Remove values from Guest list Array
guest_list.splice(0, 1, "Ayesha");
// Message print for Bigger Table
console.log("Good news ! We have found a bigger table for Dinner");
// Adding a new value at starting index of Array
guest_list.unshift("Ambreen");
//Adding a new Value at the ending index of Array
guest_list.push("Saima");
//Get a middle index of our guest list  array
let middleIndex = Math.floor(guest_list.length / 2);
//Adding a new guest to middle index of Array
guest_list.splice(middleIndex, 0, "Shafaq");
// Print message of Updated list
console.log("Updated List of our Guest");
// Sending an invitation message to our guest one by one with thier names
guest_list.forEach(oneguest => console.log(`Salam, ${oneguest},Would you like to dinner with me ?`));
// Inform that only two guest can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, So, I can only invite two guests to dinner with me.");
// Using while loop to remove guests from the Array until only two names remain
while (guest_list.length > 2) {
    let removeGuest = guest_list.pop();
    console.log(`Sorry, ${removeGuest}, I cant invite you to dinner`);
}
// sending a invitations to the last two guest on the list
console.log("Invitation to the last 2 Guest");
guest_list.forEach(lasttwo => console.log(`Luckily ${lasttwo}, You are still invited to dinner`));
// removing last two guest from the list
guest_list.pop();
guest_list.pop();
console.log("Empty list:", guest_list);
