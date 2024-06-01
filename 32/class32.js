var current_users = ["Hamza", "Talha", "Usama", "Huzaifa"];
var new_users = ["Talha", "Maaz", "Muzammil", "Usama"];
new_users.forEach(function (new_one_users) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_users.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_users, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_users, " is avalaible"));
    }
});
