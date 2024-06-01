//Making a array of countries and print its original order
let countriesToVisit: string[] = ["Switzerland", "Argentina", "Paris", "Canada"];

console.log("Original Order:", countriesToVisit);
//Print the array in Alphabetical order without  modifying the actual array list
console.log ("Alphabetical Order:", [...countriesToVisit].sort());
// Show that array still in original order
console.log("Still in Original Order;", countriesToVisit);
//Print the Array in reverse order without modifying the actual array list
console.log("Reverse Order:", countriesToVisit.reverse());
// Show that array still in original order
console.log("Still in Original Order:", countriesToVisit);
//We have changed the original array now
console.log("Original Array Reversed:", countriesToVisit.reverse());
//Print the array to show that  it`s back to original order
console.log("Back to Original Order:", countriesToVisit.reverse());
//Print the array  to show that it`s order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
//We have changed again the original array order now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());