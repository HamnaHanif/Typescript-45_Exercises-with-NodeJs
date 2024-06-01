// Define a function with a rest parameter that accept items arguments representing our sandwich
function make_Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
// Call the function 3 times with 5 different number of arguments 
make_Sandwich("Grilled Chicken Sandwich", "Cheese Steak Sandwich", "Club Sandwich", "Roast Beef Sandwich");
make_Sandwich("Butter Sandwich", "Mayo Sandwich");
make_Sandwich("Egg Sandwich", "Grilled Chicken Sandwich", "Cheese Steak Sandwich", "Club Sandwich", "Roast Beef Sandwich", "Bread Sandwich", "Mayo Sandwich");
