// Session 02 — what you build in class, and the exercise.

console.log("make.js running");


const inputValue = "";

if (inputValue){
    console.log("Thank you!")
} else{
    console.log("Please Type Something!")
} //Please Type Something!



const itemsLeft = 0;

if (itemsLeft === 0) {
    console.log("Sold out")
};



// A cinema charges: children under 12 pay **$5**. People 65 or older pay **$6**. On Tuesdays, everyone pays **$4**. Everyone else pays **$10**.

//  Write the checks **in the order you'd make them**, in plain English. Mark which one is the "otherwise."

//1. Is it Tuesday?
// 2. If age is below 12, price is $5
// 3. If age is greater than or equal to 65, retrun $6
// 4. otherwise return $10

// const day = "Wed";
// let price = 12;
// const age = 12;

// // ===
// // =

// if (day === "Tuesday") {
//   price = 4;
// } else if (age <= 12) {
//   price = 5;
// } else if (age >= 65) {
//   price = 6;
// } else {
//   price = 10;
// }

// console.log(`price: $${price}`);
// //



//  Build a **shipping calculator** in `make.js`. Start with three variables: an order total, a country (`"local"` or `"international"`), and whether the customer is a member.

