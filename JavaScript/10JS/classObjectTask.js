class BankingSystem{
    constructor(name, mobileNo, accountNo, balance){
        this.name = name;
        this.mobileNo = mobileNo;
        this.accountNo = accountNo;
        this.balance = balance;
    }

    getDetails(){
        console.log(`User Details: `)
        console.log(`   Name: ${this.name}`);
        console.log(`   Mobile Number: ${this.mobileNo}`);
        console.log(`   Account Number: ${this.accountNo}`);
        console.log(`   Balance: ${this.balance}`);
    }

    withdrawAmount(amount){
        this.balance = this.balance - amount;
        console.log(`You withdraw ${amount}. Upadated balance is ${this.balance}.`);
    }

    depositAmount(amount){
        this.balance = this.balance + amount;
        console.log(`You deposit ${amount}. Upadated balance is ${this.balance}.`);
    }
}

const user_1 = new BankingSystem("Aditya", 6261660147, 28836386483809, 1000000);
// console.log(user_1);
user_1.getDetails();
user_1.depositAmount(10000);
user_1.withdrawAmount(20000);