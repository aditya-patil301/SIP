// function login(email, password){
//     return new Promise((res, rej) => {
//         console.log("Email and Password are under process of validation.");
//         setTimeout(() => {
//             if(email === "aditya@gmail.com" && password === "Aditya@123"){
//                 console.log("You are valid user and your id and name are as follow: ");
//                 res({
//                     id: 1,
//                     name: "Aditya"
//                 })
//             } else {
//                 rej("Please recheck your credentials.");
//             }
//         }, 3000);
//     });
// }

// login("aditya@gmail.com", "Aditya@123")
//     .then((userData) => {
//         console.log(userData.name);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// login("gaurav@gmail.com", "Gaurav@123")
//     .then((userData) => {
//         console.log(userData);
//     })
//     .catch((error) => {
//         console.log(error);
//     })




// Task 1
// function pizzaDelivery(isAvailable){
//     return new Promise((res, rej) => {
//         console.log("Order is under process...")
//         if(isAvailable === true){
//             setTimeout(() => {
//                 res("Pizza Delivered.");
//             }, 2000)
//         } else{
//             rej("Order Cancelled.");
//         }
//     });
// }

// pizzaDelivery(false)
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((error) => {
//         console.log(error);
//     })




// Task 2
// function processPayment(amount){
//     return new Promise((res, rej) => {
//         console.log("Payment under process...");
//         if(amount > 0){
//             setTimeout(() => {
//                 res(`Payment of ${amount} is successful.`);
//             }, 2000);
//         } else {
//             setTimeout(() => {
//                 rej(`Insufficient amount.`);
//             }, 1000);
//         }
//     });
// }

// processPayment(0)
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((error) => {
//         console.log(error);
//     })




// Task 3
function processPayment(amount){
    return new Promise((res, rej) => {
        console.log("Payment under process...");
        if(amount > 500){
            setTimeout(() => {
                res(`Payment of ${amount} is successful.`);
            }, 2000);
        } else {
            setTimeout(() => {
                rej(`Insufficient amount.`);
            }, 1000);
        }
    });
}

processPayment(1000)
    .then((msg) => {
        console.log(msg);
    })
    .catch((error) => {
        console.log(error);
    })