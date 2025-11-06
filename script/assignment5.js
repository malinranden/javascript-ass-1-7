// BANK ACCOUNT
//

const account = {
    accountName: "Malin Randén",
    balance: 10000,
    getBalance() {
        alert(`Your balance is ${this.balance}.`)
        console.log(account.balance);
    },
    deposit() {
        let deposit = prompt(`How much do you want to deposit?`);
        balance = this.balance + parseFloat(deposit);
        console.log(balance);
        alert(`Your new balance is ${balance}.`);
    },
    withdrawal() {
        let withdrawal = prompt(`How much do you want to withdraw?`);
        balance = balance - parseFloat(withdrawal); 
        // return withdrawal;
        if (withdrawal > balance) {
            alert(`You do not have enough balance on your account.`)
        } else {
            console.log(balance);
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