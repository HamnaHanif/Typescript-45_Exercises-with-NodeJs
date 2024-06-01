// Creating a Guestlist Array
let guestList = ["Rabeea","Fazila","Mariyam","Umaima"];

// Making variable for those who dont come
let dontCome = guestList[0];

//print the name of guest who dont come
console.log(dontCome, "Nahi ah sakti hy");

//Add and Remove Values from Guest List Array
guestList.splice(0, 1, "Wajeeha");

//message print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner");

// Adding a new guest at starting index of Array
guestList.unshift("Sana");

//Adding a new guest at ending index of Array
guestList.push("Haroon");

//Get a middle index of our guest list Array
let middleIndex: number = Math.floor(guestList.length / 2);

//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Rafia");

//print message of updated list
console.log("Updated List of our Guests");

//sending a invitation message to our guests one by one with names
guestList.forEach(oneguest => console.log(`Assalam u Alaikum ${oneguest}, would you like to dinner with me?`));