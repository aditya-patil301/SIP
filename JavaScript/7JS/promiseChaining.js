// function login(email, password){
//     return new Promise((res, rej) => {
//         console.log("Credentials are under verifying process....");

//         setTimeout(() => {
//             if(email === "aditya@gmail.com" && password === "Aditya@123"){
//                 res({
//                     id: 1,
//                     name: "Aditya"
//                 })
//             } else {
//                 rej("Please enter correct credentials.");
//             }
//         }, 2000);
//     });
// }

// // In promise chaining multiple .then are used and from one ,then data is returned from one then to another and process repeated.
// login("aditya@gmail.com", "Aditya@123")
//     .then((userData) => {
//         console.log(userData);
//         return userData;
//     })
//     .then((data) => {
//         console.log(`UserID: ${data.id}`);
//         return data.name;
//     })
//     .then((userName) => {
//         console.log(`User Name: ${userName}`);
//     })
//     .catch((msg) => {
//         console.log(msg);
//     })



// WITHOUT PROMISE CHAINING

// function loginUSer(user) {
//     console.log("Aap login ho rahe hai.");

//     setTimeout(() => {
//         console.log("Aap login ho chuke hai");
//     }, 1000);
//     user();
// }

// function getProfile(order) {
//     console.log("Aapki profile fetch ho rahi hai.");

//     setTimeout(() => {
//         console.log("Aapki profile fetch ho chuki hai.");
//     }, 1000);
//     order();
// }

// function getOrder(pay) {
//     console.log("Aapka order ready ho raha hai.");

//     setTimeout(() => {
//         console.log("Aapka order ready ho chuka hai.");
//     }, 1000);
//     pay();
// }

// function payment() {
//     console.log("Payment kar dijiye.");

//     setTimeout(() => {
//         console.log("Aapka payment ho chuka hai.");
//     }, 1000);
// }


// loginUSer(() => {
//     getProfile(() => {
//         getOrder(() => {
//             payment();
//         })
//     })
// })




// WITH PROMISE CHAINING

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

// loginUSer()
//     .then(getProfile)
//     .then(getOrder)
//     .then(payment)
//     .catch(() => {
//         console.log("Kuchh galat hai.");
//     })





function selectMovie(movieName, seatNo) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Movie selected.");
            res({
                movieName,
                seatNo
            });
        }, 1000);
    });
}

function bookSeats(data) {
    return new Promise((res) => {
        setTimeout(() => {
            console.log("Seat Booked.");
            res(data);
        }, 1000);
    });
}

function makePayment(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Payment successful.");
            data.amount = data.seatNo * 300;
            resolve(data);
        }, 1000);
    });
}

function generateTicket(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Ticket generated.");
            resolve(data);
        }, 1000);
    });
}



function bookMovie(movie, seats) {
    selectMovie(movie, seats)
        .then(bookSeats)
        .then(makePayment)
        .then(generateTicket)
        .then((ticket) => {
            console.log(ticket);
        });
}
bookMovie("Avengers", 2);





// function greet() {
//     return new Promise((res, rej) => {
//         res('Good Morning!');
//     });
// }

// greet()
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch(() => {
//         console.log('Check code');
//     })