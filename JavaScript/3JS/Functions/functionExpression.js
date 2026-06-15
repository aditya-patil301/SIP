// Named Function
const greet = function(){
    console.log("Hello World!");
}
greet();


// With Parameter and Argument
const greetUser = function(name){
    console.log("Hello, " + name + ".");
    console.log(`Hello, ${name}.`);
}
greetUser("Aditya");


// Return type function
// With multiple Parameter nad Argument
const addition = function(a, b){
    return a + b;
}
console.log(addition(5,5));