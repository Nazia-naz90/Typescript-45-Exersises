let guest_list = ["Sawaira", "Sawaiba", "Hifza"];

let dontCome = guest_list[0];

console.log(dontCome,"Cant come.");

guest_list.splice(0, 1, "Ayesha");

guest_list.forEach(guest => console.log(`Salam ${guest},Would you like to dinner with me`));