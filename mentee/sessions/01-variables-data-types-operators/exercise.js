// 1. Parsons

// 3) const cartTotal = itemCount * itemPrice;
// 2) const itemPrice = 15;
//  console.log(`Cart: ${itemCount} items, total ${cartTotal}`);
// 1) const itemCount = 2;
// const cartTotal = itemCount + itemPrice;
// 4) console.log(`Cart: ${itemCount} items, total ${itemCount * itemPrice}`);
// Goal output: `Cart: 2 items, total 30`

//const itemCount = 2;
//const itemPrice = 15;
//const cartTotal = itemCount * itemPrice;
//console.log(`Cart: ${itemCount} items, total ${itemCount * itemPrice}`);

// this order gets the Goal Output of Goal output: `Cart: 2 items, total 30`

//2. Modify

console.log("exercise.js running");

const name = "Notebook"; // this wont change
let price = "10"; // will change later
let stock = 12; // will change later
const isOnSale = false;

stock = stock - 2; // 10

console.log(`NoteBook: Only ${stock} left`);
console.log(typeof name, typeof price, typeof stock, typeof isOnSale);

console.log(price * 2);
console.log(price + 2);

//Prediction: 

// console.log(price * 2); -> will result in 20 for js will take the string and force it into a number 
// console.log(price + 2); -> will result in 102 for js will handle the variables as strings due to the unique nature of + in JS