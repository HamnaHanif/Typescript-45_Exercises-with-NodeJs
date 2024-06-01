//ASSIGNMENT NO 42 :
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() 
// to see that the list has actually been modified.

// / Define the function to show magicians' names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define a function to transform magicians into great magicians
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians' names
var magicians_name = ["Harry Porter", "Laviza", "summaiyya"];
// Transform magicians into great magicians
var great_magicians = make_great(magicians_name);
// Show the great magicians' names
show_magicians(great_magicians);
// Log the great magicians' names to the console
console.log(great_magicians);
