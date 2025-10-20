
let userName = prompt(`Enter username`);
let password = prompt(`Enter password`);
// console.log(password.length);


function isValidPassword(userName, password) {
    if(password.length < 8) {
        console.log(false);
        return false;
        } else if (password.includes(" ")) {
            console.log(false);
            return false;
        } else if (password.includes(userName)) {
            console.log(false);
            return false;
        } else {
            console.log(true);
            return true;
        } 
};
console.log(isValidPassword(userName, password));


// Comparison Operators

// let password = prompt(`Enter password`);
// // password = "bajskorv";

//     if (password.length >= 8) {
//         console.log(true);
//     } else { 
//         console.log(false);
//     };


// Ternary ??? how ?

// let password = prompt(`Enter password`);
// // // password = "bajskorv";

// let output = password >= 8 ? true : false;
// console.log(output);

// function isValidPassword(userName, password) {
//     return password.length < 8 ? false
// }