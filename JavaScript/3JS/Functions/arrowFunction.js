// Named Function
const greet = () => console.log("Hello, World!");
greet();


// With Parameter and Argument
const greetUser = (name) => {
    console.log("Hello, " + name + ".");
    console.log(`Hello, ${name}.`);
}
greetUser("Aditya");


// Return type function
// With multiple Parameter nad Argument
const addition = (a, b) => {
    return a + b;
}

// const addition = (a, b) => a + b;

console.log(addition(5,5));