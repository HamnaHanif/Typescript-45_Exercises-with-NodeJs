//Define Variables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
//Test for equality and inequality with string
console.log("is apple is equal to apple");
console.log(apple == "apple");
console.log("\nis apple is not equal to apple");
console.log(apple != "apple");
//Test using Lowercase Function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//Numerical Test
//Equals to
console.log("\n Is ten is equal to twenty?");
console.log(ten == 20);
//Not Equals to
console.log("\n Is ten is not equal to twenty?");
console.log(ten != 20);
//Greater than
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);
//Less than
console.log("\n Is twenty is less than 10");
console.log(twenty < 10);
//Greater than or Equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
//Less than or Equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);
//Test using "and" & "or" Operators
//Using && "and"
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
//Using || "OR"
console.log("\n twenty is greater than 50 OR twenty is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n twenty is greater than 50 OR twenty is not equal to 20");
console.log(20 > 50 || 20 != 20);
//Test weather an item is include in array
console.log("\nIs orange include in my fruits array");
console.log(fruits.includes("orange"));
console.log("\nIs orange not include in my fruits array");
console.log(!fruits.includes("orange"));
