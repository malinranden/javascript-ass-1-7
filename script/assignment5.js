// BANK ACCOUNT
//

const account = {
    accountName: "Malin Randén",
    balance: 10000,
    getBalance() {
        alert(`Your balance is ${this.balance}.`)
        console.log(this.balance);
    },
    deposit() {
        let deposit = parseFloat(prompt(`How much do you want to deposit?`));
        this.balance = this.balance + deposit;
        console.log(this.balance);
        alert(`Your new balance is ${this.balance}.`);
    },
    withdrawal() {
        let withdrawal = parseFloat(prompt(`How much do you want to withdraw?`));
        this.balance = this.balance - withdrawal; 
        // return withdrawal;
        if (withdrawal > this.balance) {
            alert(`You do not have enough balance on your account.`)
        } else {
            console.log(this.balance);
        }
        // console.log(balance);
    },
    getAccountName() {
        console.log(`This account belongs to ${this.accountName}.`)
    },
}
account.getBalance();
account.deposit();
account.withdrawal();
account.getAccountName();
// account.accountError();

// witdrawal 
// if/else
//     om mängden är högre än mängden på kontot - ge en console.log på inte tillräckligt med pengar
//     om det är tillräckligt - else statement = uträkning
//     Kan lägga den i witdrawal function men kan ha egen function (accountError)