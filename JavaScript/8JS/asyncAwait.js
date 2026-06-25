// function isDelivered() {
//     return new Promise((res, rej) => {
//         let delivered = false;
//         if (delivered) {
//             res("Order Delivered.");
//         } else {
//             rej("Order Cancelled.")
//         }
//     });
// }

// async function checkDelivery() {
//     try {
//         const message = await isDelivered();
//         console.log(message);
//         console.log("Thank You for shopping!!");
//     } catch(error){
//         console.log(error);
//         console.log("Thank You for shopping!!");
//     }
// }

// checkDelivery();







// function connection(){
//     return new Promise((res, rej) => {
//         console.log("Connect ho raha hai database se.");
//         setTimeout(() => {
//             res("Connect ho raha hai.")
//         }, 1000);
//     });
// }

// async function isConnected() {
//     try{
//         const response = await connection();
//         console.log(response);
//     } catch {
//         console.log("Connection nahi hua.")
//     }
// }

// isConnected();










// function loginUSer() {
//     return new Promise((res, rej) => {
//         console.log("Aap login ho rahe hai.");
//         setTimeout(() => {
//             console.log("Aap login ho chuke ho.");
//             res();
//         }, 1000);
//     });
// }

// function getProfile() {
//     return new Promise((res, rej) => {
//         console.log("Aapki profile fetch ho rahi hai.");
//         setTimeout(() => {
//             console.log("Aapki profile fetch ho chuki hai.");
//             res();
//         }, 1000);
//     });
// }

// function getOrder() {
//     return new Promise((res, rej) => {
//         console.log("Aapka order ready ho raha hai.");
//         setTimeout(() => {
//             console.log("Aapka order ready ho chuka hai.");
//             res();
//         }, 1000);
//     });
// }

// function payment() {
//     return new Promise((res, rej) => {
//         console.log("Payment kar dijiye.");
//         setTimeout(() => {
//             console.log("Aapka payment ho chuka hai.");
//             res();
//         }, 1000);
//     });
// }

// async function orderProcess() {
//     try {
//         await loginUSer();
//         await getProfile();
//         await getOrder();
//         await payment();
//     } catch {
//         console.log("Please repeat the process.")
//     }
// }

// orderProcess();










// function selectMovie(movieName, seatNo) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("Movie selected.");
//             res({
//                 movieName,
//                 seatNo
//             });
//         }, 1000);
//     });
// }

// function bookSeats(data) {
//     return new Promise((res) => {
//         setTimeout(() => {
//             console.log("Seat Booked.");
//             res(data);
//         }, 1000);
//     });
// }

// function makePayment(data) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Payment successful.");
//             data.amount = data.seatNo * 300;
//             resolve(data);
//         }, 1000);
//     });
// }

// function generateTicket(data) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Ticket generated.");
//             resolve(data);
//         }, 1000);
//     });
// }

// async function bookMovie(movie, seatNo){
//     try{
//         let data = await selectMovie(movie, seatNo);
//         data = await bookSeats(data);
//         data = await makePayment(data);
//         data = await generateTicket(data);
//         console.log("Aapka ticket generate ho raha hai....")
//         setTimeout(() => {
//             console.log(data);
//         }, 1000);
//     } catch {
//         console.log("Try again.")
//     }
// }

// bookMovie("Avengers", 2);




// OTP Verification System

// function getOTP(number){
//     return new Promise((res, rej) => {
//         console.log("Your phone number is under verification. WAIT!!");
//         setTimeout(() => {
//             if(number === 6261660147){
//                 res(Math.floor(Math.random() * Math.pow(10, 6)));
//             } else {
//                 rej("Invalid phone number.");
//             }
//         }, 1000);
//     });
// }

// function verifyOTP(otp, userOTP){
//     return new Promise((res, rej) => {
//         console.log("OTP is under verification. WAIT!!");
//         setTimeout(() => {
//             if(otp === userOTP){
//                 res("Valid User.");
//             } else {
//                 rej("Invalid OTP.");
//             }
//         }, 1000);
//     });
// }


// async function OTPVerification(number){
//     try{
//         const otp = await getOTP(number);
//         console.log(`Your OTP: ${otp}`);
//         const isCorrect = await verifyOTP(otp, 873628);
//         console.log(isCorrect);
//     } catch(err){
//         console.log(err);
//     }
// }

// OTPVerification(6261660147);






// function login(email, password){
//     return new Promise((res, rej) => {
//         console.log("Aapke credentials check ho rahe hai.");
//         setTimeout(() => {
//             if(email === 'aditya@gmail.com' && password === "Aditya@123"){
//                 res("Valid User.");
//             } else {
//                 rej("Invalid USer.")
//             }
//         });
//     });
// }

// async function userChecker(email, password){
//     try{
//         const isValid = await login(email, password);
//         console.log(isValid);
//     } catch(err){
//         console.log(err);
//     }
// }

// userChecker("samiran@gmail.com", "Aditya@123");






// UBER Workflow

function bookRide(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Wait till riders accept your request..");
            res();
        }, 1000);
    });
}

function acceptRide(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Rider accepted your request. Wait at location.");
            res();
        }, 1000);
    });
}

function startRide(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Happy Journey...");
            res();
        }, 1000);
    });
}

function makePayment(){
    return new Promise((res, rej) => {
        console.log("You reached your location, make payment..");
        setTimeout(() => {
            console.log("Payment done. Have a nice day..");
            res();
        }, 1000);
    });
}


async function bookBike() {
    await bookRide();
    await acceptRide();
    await startRide();
    await makePayment();
}

bookBike();

// finally block after try and catch.