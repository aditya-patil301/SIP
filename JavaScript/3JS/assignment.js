// Task 1
function greetUser(name){
    console.log("Hello, " + name);
}
// const greetUser = (name) => console.log(`Hello, ${name}`);
greetUser("Aditya");


// Task 2
const priceCalculator = (price, quantity) => price * quantity;
console.log(priceCalculator(500, 3));


// Task 3
const deliveryCost = (price, dCost = 40) => price + dCost;
console.log(deliveryCost(500, 20));
console.log(deliveryCost(500));


// Task 4
const eligibilityChecker = (age) => {
    if(age > 18){
        console.log("You are eligible.")
    } else {
        console.log("You are not eligible");
    }
}
eligibilityChecker(15);
eligibilityChecker(23);


// Task 5
const discountCalculator = function(price, discount){
    return (discount / 100) * price;
}
console.log(discountCalculator(500, 10));


// Task 5
const currencyConverter = (rupees, dollar) => rupees / dollar;
console.log(discountCalculator(500, 94.70));






// Task 6
const student = {
    name: "Aditya",
    age: 22,
    class: "BCA",
    city: "Sanawad"
}
console.log(student.name);
console.log(student.age);
console.log(student["class"]);
console.log(student["city"]);

// Task 7
student.age = 24;
student.city = "Indore";
console.log(student);


// Task 8
const user = {
    name: "Adi",
    tempToken: "278744389209"
}

user.phoneNo = 6261660147;
console.log(user);

delete user.tempToken;
console.log(user);


// Task 9
const tempUser = {
    "name": "Adi",
    "tempToken": "278744389209"
}

// const getValue = (object, key) => {
//     const str = `${object}.${key}`;
//     console.log(str);
// }

const getValue = (object, key) => {
    console.log(object[key]);
}

getValue(tempUser, "name");


// Task 10
for(const[key, value] of Object.entries(student)){
    console.log(`${key}: ${value}`)
}


// Task 11
const accountHolder = {
    name: "Aditya",
    balance: 1000000,
    deposit: function(amount){
        this.balance = this.balance + amount;
    },
    withdraw: function(amount){
        this.balance = this.balance - amount;
    }
}

accountHolder.deposit(10000);
console.log(accountHolder.balance);
accountHolder.withdraw(10000);
console.log(accountHolder.balance);
