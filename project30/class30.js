var userName = ["Hamza", "Talha", "Usama", "Huzaifa", "Admin", "Haroon"];
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hellow ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hellow ".concat(oneUser, ", thank you for logging in again."));
    }
});
