
let userName = prompt(`Enter username`);
let password = prompt(`Enter password`);
// console.log(password.length);


function isValidPassword(password) {
    if(password.length >= 8) {
        return true;
        console.log(true);
    } else {
        return false;
        console.log(false);
    }
    if(password.includes(" ")) {
        return false;
        console.log(false);
    } else {
        return true;
        console.log(true);
    }
    if(userName.includes(password)) {
        return false;
        console.log(false);
    } else {
        return true;
        console.log(true);
    } 
};
console.log(isValidPassword(password));




// switch (password) {
//     case "blankSpace":
//         console.log(password.includes(" "));
//         break;
// }