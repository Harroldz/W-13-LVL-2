// Session 03 — the line-ordering puzzle.

console.log("parsons.js running");


// Goal Output: 80

// A   function applyDiscount(price, amount) {
// B   return price - amount;
// C   }
// D   console.log(applyDiscount(100, 20));
// X   console.log(price - amount);
// Y   console.log(applyDiscount(20, 100));

// function applyDiscount(price, amount) { // A
//     return price - amount; // B
// } // C
// console.log(applyDiscount(100, 20)); // D


// A function that returns `"Free"` for members or orders over $50, and `"$5"` otherwise. Goal: `getShipping(false, 30)` gives `"$5"`, `getShipping(true, 30)` and `getShipping(false, 80)` give `"Free"`.

// A   if (isMember) return "Free";
// B   }
// C   return "$5";
// D   function getShipping(isMember, total) {
// E   if (total > 50) return "Free";

// D, A, E, C, B,

// function getShipping(isMember, total) {
//   if (isMember) return "Free";
//   if (total > 50) return "Free";
//   return "$5";
// }

// console.log(getShipping(true, 30));


// const getShipping = (isMember, total) => {
//   if (isMember || total > 50) {
//     return "Free";
//   } else {
//     return "$5";
//   }
// };

// console.log(getShipping(true, 30));


// const triple = (n) => ___;
// console.log(triple(4)); // 12

// //answer

// const triple = (n) => n * 3;

// console.log(triple(4)); // 12

// const greet = (___) => `Hello, ${name}`;
// console.log(greet("Ana")) // Hello, Ana

// //answer

// const returnTotal = (price) => {
//   const discount = price * 0.1;
//   const totalPrice = price - discount;

//   return totalPrice;
// };

// console.log(return(200));

// // const greet = (___) => `Hello, ${name}`;
// // console.log(greet("Ana")) // Hello, Ana