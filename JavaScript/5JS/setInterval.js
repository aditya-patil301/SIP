// Set Interval
// setInterval(() => {
//     console.log("Running");
// }, 1000);


// CountDown
// let sec = 10;
// const timer = setInterval(() => {
//     console.log(sec);
//     sec--;
//     if(sec <= 0) clearInterval(timer);
// }, 1000);


// setInterval(() => {
//     const time = new Date();
//     console.log(time.toLocaleTimeString());
// }, 1000);


// Task - Print table of 2 using setInterval()
let number = 1
const table = setInterval(() => {
    if(number > 10){
        clearInterval(table);
    } else {
        console.log(`2 x ${number} = ${2 * number}`);
        number++;
    }
}, 1000);