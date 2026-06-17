// High order functions are also known as Callback functions.

function greet(){
    return `Hello! `;
}

function greetUser(func, name){
    console.log(func() + name);
}

greetUser(greet, "Aditya");



// Function defined inside another function

function greetAdi(adi) {
    adi();
}
greetAdi(function () {
    console.log("Hello! Aditya.");
});



// Task of CallBack Function

function paymentSuccess(){
    console.log("Payment Successful.")
}

function withdraw(initial_amount, debited_amount, success){
    console.log(`Rs. ${debited_amount} deducted from your account.`);
    console.log(`${initial_amount - debited_amount} is your current balance.`);
    success();
}

withdraw(1000, 100, paymentSuccess);





const products = [
    {
        id: 1,
        name: "Laptop",
        price: 7000000
    },

    {
        id: 2,
        name: "Realme 9i",
        price: 14800
    },

    {
        id: 3,
        name: "LG Telivision",
        price: 70000
    },

    {
        id: 4,
        name: "RedTape Shoes",
        price: 11500
    },

    {
        id: 5,
        name: "Timex",
        price: 5675
    }
];

console.log(products[0].id);

// ForEach Loop
products.forEach((obj) => {
    console.log(obj.id);
});


// Function to add all price
const sum = (arr) => {
    let sum = 0;
    arr.forEach((obj) => {
        sum = sum + obj.price;
    });
    return sum;
}
console.log(sum(products));



// Map Method -> creates new array
let arr = [1, 2, 3, 4, 5, 6];
const double = arr.map(num => {
    return num * 2 + 2;
});

console.log(double);



// Filter Method -> creates new array
const even = arr.filter(num => 
    num % 2 == 0
);
console.log(even);

const odd = arr.filter(num => 
    num % 2 != 0
);
console.log(odd);



// Reducer Method -> creates new array
// Accumulator = Stores the result
// Current value = Stores the current value
// InitialValue = Starting point
const sumWithReduce = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(sumWithReduce);


const cartPrice = products.reduce((acc, obj) => {
    return acc + obj.price;
}, 0);
console.log(cartPrice);




// Task
let arrTask = [-2, 3, 5, 8, -9];
const doubledTask = arrTask.map((num) => {
    return num + 2;
});
// console.log(doubledTask);
const positive = doubledTask.filter((num) => {
    return num > 0
});
// console.log(positive);
const sumTask = positive.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(sumTask);

const shortAns = arrTask.map(i => i + 2).filter(i => i > 0).reduce((acc, curr) => {return acc + curr}, 0);
console.log(shortAns);