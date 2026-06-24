function loginUser() {
    return new Promise((res, rej) => {
        console.log("Your credentials are under verification.");
        setTimeout(() => {
            console.log("You logged in.");
            res();
        }, 1000);
    });
}

function getUser() {
    return new Promise((res, rej) => {
        console.log("Your information is on the way.");
        setTimeout(() => {
            res({
                id: 1,
                name: "Aditya"
            });
        }, 1000);
    });
}

function getCart() {
    return new Promise((res, rej) => {
        console.log("Your cart information is on the way.");
        setTimeout(() => {
            res({
                cartCount: 3,
                price: 1200
            });
        }, 1000);
    });
}

function getProducts() {
    return new Promise((res, rej) => {
        console.log("Your products information is on the way.");
        setTimeout(() => {
            res({
                productCount: 3,
                productName: ["Phone", "Laptop", "Earphone"]
            });
        }, 1000);
    });
}


async function getDetails() {
    try {
        await loginUser();
        const [user, cart, product] = await Promise.all([
            getUser(),
            getCart(),
            getProducts()
        ]);

        console.log(user);
        console.log(cart);
        console.log(product);
    } catch {
        console.log("You make mistake, TRY AGAIN!");
    }
}

getDetails();