let userName = ["Hamza", "Talha", "Admin", "Usama", "Huzaifa"];
userName = []
if(userName.length === 0){
console.log("Your Array is Empty We need to find some users!");
}else{
     userName.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hellow ${oneUser}, would you like to see a status report?`);
        }else{
            console.log(`Hellow ${oneUser}, thank you for logging in again.`);
        }
    })
}