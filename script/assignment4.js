// //....... EXERCISE 1: Guess the random number.......//

function guessNumberGame() {
    const target = Math.floor(Math.random() * 10);
    let guess = null;
    while (guess !== target) {
        console.log(`Target: ${target}. Your guess: ${guess}`);
        guess = parseFloat(prompt("Make a guess"));
    }
    return target, guess; // funkar utan den här 
}
console.log((`Your guess at the number `) + guessNumberGame() + (` was correct. Congratz!`));


//...... EXERCISE 2: Create an array of random numbers.......//

    // Den här koden är korrekt, utan function:
// let choice = prompt("Choose how many random numbers you want");

//     let randomNumbers = [];
//     for (let i = 0; i < choice; i++) {
//         randomNumbers[i] = Math.floor(Math.random()*100) +1;
//     }
//     console.log(randomNumbers);
    //

    // Här försöker jag få in den i function
let choice = prompt("Choose how many random numbers you want");
function generateRandomArray(choice) {
    const randomNumbers = [];
    for (let i = 0; i < choice; i++) {
        randomNumbers[i] = Math.floor(Math.random()*100) +1;
    }
    return randomNumbers;
}
randomNumbers = generateRandomArray(choice);
console.log(randomNumbers);

// Frågor:
// - i uppg 3 körs function name i den sista console.log, inte här? varför? pga array=har fler values??


// This is the answer/solution from Michelle:
    // let length = prompt("Please enter a number between 1 and 10");
    // let length = 5;

    // function generateRandomArray(length) {
    //     const array = [];
    //     for (let i = 0; i < length; i++) {
            
    //         array[i] = Math.floor(Math.random()*100) +1;
    //     }
    //     return array;
    // }
    // array = generateRandomArray(length);
    // console.log(array);


//....... Exercise 3: calculate the sum of even numbers in the array .......//
// Create a function sumEvenNumbers that accepts an array as an argument.
// Use a for loop to iterate through the array and calculate the sum of the even numbers.
// Return the sum of the even numbers.

// let myArray = [10]; // ev ej nödvändig..?
// function sumEvenNumbers(myArray) {
//     for (i = 0; i < myArray; i++) {
//         let evenNumbers = (myArray[i] === %2);
//         console.log(evenNumbers);
//         // if i === %2 = evenNumbers // det här är vad jag vill ska hända 
//     }
// }
// sumEvenNumbers([/*values*/]); // call the fuction as an array
// console.log(sunEvenNumers); // osäker, är  det sumEvenNumbers eller myArray?


// let input = 10;
// let evenNumbers = input %2;
// console.log(evenNumbers.sum%(2));
// // function sumEvenNumbers(input, evenNumbers) {
//     // let array = [];
// //     for (let i = 1; i <= input; i++) {
// //         // const[i] = 
// //         if (i = evenNumbers){
// //             console.log(evenNumbers);
// //             break;
// //         }
// //     }
// // //     return input, evenNumbers;
// // }
// // console.log()
// // input.sum[%2 == 1];

// // x === %2; 
// // x = how many even numbers

// // prompt with parseFloat to make into numbers
// // fruit[1] = "coconut"; // changes item 1 to coconut

// // let number = 1;
// // function isEven (number) {
// //     if (number %2 === 0) {
// //         return sum of number;
// //     } 
// // };
// // console.log(isEven(number));

//                     // for (let i = 1; i <= 15; i++) {
//                     //     if (i ===10){
//                     //         break;
//                     //     } else {
//                     //         console.log(i); // shows 1-9 and then stops 
//                     //     }
//                     // }