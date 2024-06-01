//Making function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large "; }
    if (printMessage === void 0) { printMessage = "I love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, "  prints on shirt"));
}
//Calling a function
make_shirt();
//Calling a function now with Medium size and default message
make_shirt("Medium");
//Creating a function now with Medium size and default message
make_shirt("Small", "I love JavaeScript");
