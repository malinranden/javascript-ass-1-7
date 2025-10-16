// // let pricetag = ("Enter pricetag", "$39.99");
// // prompt(pricetag); 

// This is my version. See below for Michelles advice

let cost = prompt("Enter pricetag");
console.log(cost);

cost = cost.slice(1);
console.log(cost);

cost *= 0.9; 
console.log(cost);

cost = parseInt(cost);
console.log(cost);

cost = "your new price is $" + cost;
console.log(cost);


// Advice 
// Use new variables for the new output 
// and use backticks 

let price = prompt(`Enter pricetag`);
console.log(price);

let input = parseFloat(price.slice(1));
console.log(input);

let discount = input * 0.9;
console.log(discount);

console.log(`Your new discounted price is $${discount}`);
console.log(`And the original price was ${price}`);