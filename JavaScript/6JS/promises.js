// Syntax of promise - 
// const promise = new Promise((resolve, reject) => {
//     //Asynchronous Logic Here
// })


// const orderFood = new Promise((resolve, reject) => {
//     const delivered = false;
//     if(delivered){
//         resolve("Food Delivered.");
//     } else {
//         reject("Order Cancelled.");
//     }
// });

// const orderFood = new Promise((res, rej) => {
//     const delivered = true;
//     if(delivered){
//         res("Food Delivered.");
//     } else {
//         rej("Order Cancelled.");
//     }
// });

// orderFood
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// const connection = new Promise((res, rej) => {
//     console.log("The process of connecting database is started.");
//     setTimeout(() => {
//         console.log("Database is connected.");
//         res();
//     });
// });

// connection
//     .then(() => {
//         console.log("Promise fullfilled.");
//     })
//     .catch(() => {
//         console.log("Promise rejected.");
//     });



// First Way
const connection = new Promise((res, rej) => {
    console.log("The process of connecting database is started.");
    setTimeout(() => {
        console.log("Database is connected.");
        res("From resolved.");
    }, 3000);
});

connection
    .then((msg) => {
        console.log(msg);
        console.log("Promise fullfilled.");
    })
    .catch(() => {
        console.log("Promise rejected.");
    });



// Second Way
new Promise((res, rej) => {
    console.log("The process of connecting database is started.");
    setTimeout(() => {
        console.log("Database is connected.");
        res("From resolved.");
    }, 3000);
})

    .then((msg) => {
        console.log(msg);
        console.log("Promise fullfilled.");
    })
    .catch(() => {
        console.log("Promise rejected.");
    });



// Third Way
function funcConnection() {
    return new Promise((res, rej) => {
        console.log("The process of connecting database is started.");
        setTimeout(() => {
            console.log("Database is connected.");
            res("From resolved.");
        });
    }, 3000);
}

funcConnection()
    .then((msg) => {
        console.log(msg);
        console.log("Promise fullfilled.");
    })
    .catch(() => {
        console.log("Promise rejected.");
    });



