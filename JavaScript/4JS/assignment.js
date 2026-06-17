// Task 1
let prices = [1000, 2000, 3000];
let discountedPrice = prices.map((price) => price - (price * (10 / 100)));
console.log(discountedPrice);


// Task 2
const users = [
    {
        id: 1,
        name: "Aditya"
    },

    {
        id: 2,
        name: "Gaurav"
    },

    {
        id: 3,
        name: "Samiran"
    }
];
users.forEach((obj) => {
    console.log(obj.name);
});



// Task 3
const products = [
    {
        name: "Laptop",
        price: 50000
    },

    {
        name: "Mouse",
        price: 500
    },

    {
        name: "Phone",
        price: 30000
    }
];

products.forEach((obj) => {
    console.log(`${obj.name}: ${obj.price}`);
})


// Task 4
const expensiveProducts = products.filter((obj) => {
    return obj.price > 20000
});

console.log(expensiveProducts);



// Task 5
const usersIsActive = [
    {
        id: 1,
        name: "Aditya",
        active: true
    },

    {
        id: 2,
        name: "Gaurav",
        active: false
    },

    {
        id: 3,
        name: "Samiran",
        active: true
    }
];

const activeUsers = usersIsActive.filter((obj) => {
    return obj.active === true
});

console.log(activeUsers);



// Task 6
const productCollection = ["iPhone", "Headphone", "Laptop", "Phone Case"];
const search = "phone";
const containsPhone = productCollection.filter((items) => {
    return items.toLowerCase().includes(search);
});
console.log(containsPhone);



// Task 7
const reducePrices = [1000, 2000, 3000];
let reducedPrices = reducePrices.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(reducedPrices);



// Task 8
const quantityProducts = [
    {
        name: "Laptop",
        quantity: 3
    },

    {
        name: "Mouse",
        quantity: 4
    },

    {
        name: "Phone",
        quantity: 10
    }
];

let quantities = quantityProducts.reduce((acc, obj) => {
    return acc + obj.quantity;
}, 0);
console.log(quantities);



// Extra Task

let extraTaskProducts = [
 {
   name: "Laptop",
   price: 50000,
   available: true,
   quantity: 2
 },
 {
   name: "Phone",
   price: 30000,
   available: false,
   quantity: 7
 },
 {
   name: "Mouse",
   price: 1000,
   available: true,
   quantity: 12
 }
];

const isAvailable = extraTaskProducts.filter(obj => obj.available === true);
console.log(isAvailable);

const extraTaskDiscountedPrice = extraTaskProducts.map((obj) => obj.price - (obj.price * (10 / 100)));
console.log(extraTaskDiscountedPrice);

const totalQuantity = extraTaskProducts.reduce((acc, obj) => {
    return acc + obj.quantity;
}, 0);
console.log(totalQuantity);

const totalAmount = extraTaskProducts.reduce((acc, obj) => {
    return acc + obj.price;
}, 0);
console.log(totalAmount);

const requiredObj = extraTaskProducts.filter((obj) => obj.name === "Laptop");
requiredObj.map((obj) => {
    return obj.quantity = 10;
});
console.log(requiredObj);

const laptop = products.find(obj => obj.name === "Laptop");
if (laptop) {
  laptop.quantity += 1;
  const laptopTotalPrice = laptop.price * laptop.quantity;
  console.log(`Laptop Quantity: ${laptop.quantity}, Total Price: ${laptopTotalPrice}`);
}