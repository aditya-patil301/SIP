// Precision in JS

let a = 36.987
let b = 33.9756

let sum = a + b;

console.log(sum.toFixed(3));      // After decimal
console.log(sum.toPrecision(4));     // Total number

// Floor - Nearest least
let c = 2.9;
console.log(Math.floor(c));

// Ciel - Nearest largest
let d = 2.9;
console.log(Math.ceil(d));


// Random Number
console.log(Math.random());  // Gives value between 0 - 1
console.log(Math.random() * 10)  // Gives value between 1 - 9
console.log(Math.floor((Math.random() * 10)).toFixed(0));

// Minimum and Maximum
console.log(Math.min(2, -1, -7, 10));
console.log(Math.max(2, -1, -7, 10));

// Conditional Statement
let age = 16;
if(age > 18){
    console.log("You are eligible for driving license.")
} else {
    console.log("You are not eligible for driving license.")
}


// Iteration Statements

for(let i = 1; i <= 10; i++){
    let num = 2 * i;
    console.log(`2 x ${i} = ${num}`);
}