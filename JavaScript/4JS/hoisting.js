// Hoisting

greet();
function greet(){
    console.log("Hello");
}
// const greet = () => console.log(`Hello! ${name}`);

console.log(name);
var name = "Aditya";


// Gives ReferenceError with let and const in Hoisting
console.log(age);
const age = 22;