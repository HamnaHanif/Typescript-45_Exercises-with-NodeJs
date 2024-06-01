// //Define the function to show magicians name
// function show_magicians(magicians: string[]){
//     magicians.forEach(name => console.log(name));
// }

// function make_great(magicians: string[]){
//     magicians.map(name => `The Great ${name}`);
// }

// //Define an array of magicians names
// let magicians_name = ["Harry Porter", "Laviza" , "summaiyya"]

// let great_magicians = make_great(magicians_name);

// show_magicians(great_magicians);
// console.log(great_magicians);

// / Define the function to show magicians' names
 function show_magicians(magicians: string[]) {
   magicians.forEach(name => console.log(name));
 }

// Define a function to transform magicians into great magicians
function make_great(magicians: string[]): string[] {
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians' names
let magicians_name: string[] = ["Harry Porter", "Laviza", "summaiyya"];

// Transform magicians into great magicians
let great_magicians: string[] = make_great(magicians_name);

// Show the great magicians' names
show_magicians(great_magicians);

// Log the great magicians' names to the console
console.log(great_magicians);