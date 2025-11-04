// BANK ACCOUNT
// allt funkar fram till getBalance delen ( utan return ). Efter det vet jag inte

const account = {
    accountName: "Malin Randén",
    balance: 10000,
    addedMoney: 500,
    takenMoney: 200,
    getBalance() {
        console.log(account.balance);
    },
    deposit() {
        let deposit = this.balance + this.addedMoney;
        console.log(deposit);
    },
    withdrawal() {
        let withdrawal = this.balance - this.takenMoney;
        console.log(withdrawal);
    },
    getAccountName() {
        console.log(`This account belongs to ${this.accountName}.`)
    },
    accountError() {
        if (this.balance < 0)
            console.log(`Error`);
    }
}
account.getBalance();
account.deposit();
account.withdrawal();
account.getAccountName();
account.accountError();