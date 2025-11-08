// BANK ACCOUNT //


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
        if (withdrawal > this.balance) {
            alert(`You do not have enough balance on your account.`)
        } else {
            console.log(this.balance);
        }
    },
    getAccountName() {
        console.log(`This account belongs to ${this.accountName}.`)
    },
}

let running = true;
function atm () {
    while (running) {
    const message = parseFloat(
        prompt(`
            Select your choice. 1.) See balance. 2. Make your choice. 3.) Make a withdrawal. 4.) Get account name. 5.) Exit.`
        )
    );

    switch (message) {
        case 1:
            account.getBalance();
            break;
        case 2:
                account.deposit();
            break;
        case 3:
            account.withdrawal();
            break;
        case 4:
            account.getAccountName();
            break;
        case 5:
            running = false;
            alert(`Goodbye!`);
    }
    }
}
atm();



// - Två delar: Account-object och Atm-function
// - Atm function: börjar m prompt, baserat på nummer så kallas olika delar av object. Ex 1 see balance - function hämta info från object. 
// - Refererar genom account.balance (innan jag gjorde atm function )
// witdrawal 
// if/else
//     om mängden är högre än mängden på kontot - ge en console.log på inte tillräckligt med pengar
//     om det är tillräckligt - else statement = uträkning
//     Kan lägga den i witdrawal function men kan ha egen function (accountError)