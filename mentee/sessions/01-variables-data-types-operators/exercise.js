// 0. Parsons

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

 const itemCount = 2;
 const itemPrice = 15;
 const cartTotal = itemCount * itemPrice;
 console.log(itemCount)
 console.log(itemPrice)
 console.log(cartTotal)
 console.log(`Cart: ${itemCount} items, total ${cartTotal}`);
//  console.log(`Cart: ${itemCount} items, total ${itemCount * itemPrice}`);
// Goal output: `Cart: 2 items, total 30`


//2. Modify

// console.log("exercise.js running");

// const name = "Notebook"; // this wont change
// let price = "10"; // will change later
// let stock = 12; // will change later
// const isOnSale = false;

// stock = stock - 2; // 10

// console.log(`NoteBook: Only ${stock} left`); // console.log('NoteBook: ${cartTotal left'})
// console.log(typeof name, typeof price, typeof stock, typeof isOnSale);

// console.log(price * 2);
// console.log(price + 2);

//Prediction: 

// console.log(price * 2); -> will result in 20 for js will take the string and force it into a number 
// console.log(price + 2); -> will result in 102 for js will handle the variables as strings due to the unique nature of + in JS



// ### 1. Parsons

// Goal output: `Cart: 2 items, total 30`

// ```
// A   const cartTotal = itemCount * itemPrice;
// B   const itemPrice = 15;
// C   console.log(`Cart: ${itemCount} items, total ${cartTotal}`);
// D   const itemCount = 2;
// X   const cartTotal = itemCount + itemPrice;
// Y   console.log(`Cart: ${itemCount} items, total ${itemCount * itemPrice}`);
// ```

// `X` gives the wrong total. `Y` actually works — it produces the right output — but leaves `A` unused and skips the variable. If a mentee picks `Y` and explains why, that's a good answer. If they pick it without noticing `A` is left over, ask what `cartTotal` is for.

// ### 2. Modify

// > Take your Make task. Change the price so it's stored as a **string** — `"4"` instead of `4` — as if it had come from a form. Run your code. Then add these two lines and predict each before running:
// >
// > ```js
// > console.log(price * 2);
// > console.log(price + 2);
// > ```
// >
// > Post both results in #lvl-2-homework-or-exercise-subm, with one sentence on why they're different.