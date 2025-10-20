
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

