
// Immediately Invoked Function Expressions IIFE
// Global Variable Pollution means creating too many variables in the global scope, 
// where they can accidentally conflict with other variables or be modified by other parts of your program.

let userName = "Ridita Das";
let email = "riditadas7@gmail.com";

(function connect1 ()
{
    // Named IIFE
    console.log("DB CONNECTED")
})();

((userName)=>{
    // Simple IIFE
    userName = "Abir Saha"
    console.log(`My facebook user name : ${userName}`)
})(userName);

(connect2=(email)=>{
    email = "abirsaha9328@gmail.com"
    console.log(`My email id : ${email}`)
})(email);


console.log(userName)
console.log(email)
