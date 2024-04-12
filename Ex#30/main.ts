// Creating An Array
let userNames = ["Zara", "Admin", "Zoobia", "Sawaira", "Farina"];

// Using forEach Loop An Array
userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }
    else{
        console.log(`Hello ${oneUser},thank you for logging in again.`)
    }
})