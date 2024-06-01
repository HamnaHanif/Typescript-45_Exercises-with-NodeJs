//ASSIGNMENT NO 17 :
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
//invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



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
while(guestList.length > 2) {
     let removeGuest = guestList.pop();
    console.log(`Sorry, ${removeGuest} I cant invite you to dinner`);
}
// sending a invitations to the last two guest on the list
console.log("Invitations to the last 2 Guests");

guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));
//removing last two guest from the list
guestList.pop();
guestList.pop();

console.log("EmptyList:", guestList);