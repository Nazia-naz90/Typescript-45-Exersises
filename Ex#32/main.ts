// Array of Current_user
let current_users = ["usman", "ali", "Areeba", "Zain", "Osama"];

// Array of New_user
let new_users = ["Hamza", "Ayesha", "Ali", "Mohad", "Areeba"];

//Loop through more user for users name availability
new_users.forEach((new_one_user) => {
  // Making a condition for username already exist and save in our_condition variable
  let our_condition = current_users.some(
    (current_one_user) =>
      current_one_user.toLowerCase() === new_one_user.toLowerCase()
  );

  // Print Difference messages using if else statement
  if (our_condition) {
    console.log(`Sorry ${new_one_user} Is already taken`);
  } else {
    console.log(`This user name ${new_one_user} Is available`);
  }
});
