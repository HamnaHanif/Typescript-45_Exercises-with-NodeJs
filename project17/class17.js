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
//Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");
//Using while.loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I cant invite you to dinner"));
}
// sending a invitations to the last two guest on the list
console.log("Invitations to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
//removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("EmptyList:", guestList);
