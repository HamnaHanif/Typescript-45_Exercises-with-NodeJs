//ASSIGNMENT NO 3:
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
//uppercase, and titlecase.


var personName = "Hamna Hanif";
//LowerCase :
console.log(personName.toLowerCase());
//UpperCase :
console.log(personName.toUpperCase());
//TitleCase :
console.log(personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
