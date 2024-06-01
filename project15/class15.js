var guestList = ["Rabeea", "Fazila", "Mariyam", "Umaima"];
var dontCome = guestList[0];
console.log(dontCome, "Nai ahh sakti");
guestList.splice(0, 1, "Wajeeha");
guestList.forEach(function (guest) { return console.log("Assalam u Alaikum ".concat(guest, ", would u like to Dinner with me?")); });
