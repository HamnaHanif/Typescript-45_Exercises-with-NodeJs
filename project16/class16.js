//ASSIGNMENT NO 16 :
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program 
//informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.


// Creating a Guestlist Array
var guestList = ["Rabeea", "Fazila", "Mariyam", "Umaima"];
// Making variable for those who dont come
var dontCome = guestList[0];
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
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Rafia");
//print message of updated list
console.log("Updated List of our Guests");
//sending a invitation message to our guests one by one with names
guestList.forEach(function (oneguest) { return console.log("Assalam u Alaikum ".concat(oneguest, ", would you like to dinner with me?")); });
