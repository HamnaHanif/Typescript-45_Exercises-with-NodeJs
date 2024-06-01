//ASSIGNMENT NO 13:
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list 
//that stores several examples. Use yourlist to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”


var transportationModes = ["BMW Car", "Ferrari", "Corolla", "Racing Car"];
transportationModes.forEach(function (mode) { return console.log("I would like to own a ".concat(mode)); });
