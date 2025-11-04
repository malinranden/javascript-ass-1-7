//.....Function med if/else statements (inlämning för uppgiften)

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




//......Comparison Operators ?? kanske inte är relevant

// // let password = prompt(`Enter password`);
// let password = "bajskv";
// let userName = "hejsa"

//     if (password.length < 8) {
//         console.log(true);
//     } else if (password == password.includes(userName)) {
//         console.log(false);
//     } else { 
//         console.log(true);
//     };


//.......Ternary Statments(Y)
// - alla statements här ska visa "true" - om dem är med i lösenordet,
//   (false=korrekt skrivet lösenord. Eftersom vi testar om den innehåller fel.)

let userName = prompt(`Enter username`);
let password = prompt(`Enter password`);
// let password = "testlösen";
// let userName = "hallå";

function isValidPassword(userName, password) {
    return (password.length < 8 || password.includes(" ") || password.includes(userName)) ? true : false;
};
console.log(isValidPassword(userName, password));