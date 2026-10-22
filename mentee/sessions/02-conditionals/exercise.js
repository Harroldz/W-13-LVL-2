// 1. Parsons

// Goal output: `Grade: B` when `score` is `85`.


// A   else if (score >= 80) 
// B   const score = 85;
// C   if (score >= 90) {
// D   grade = "B";
// E   let grade = "";
// F   grade = "A";
// G   } else {
// H   grade = "C";
// I   }
// J   console.log(`Grade: ${grade}`);
// X   if (score >= 80) 
// Y   if (score = 90) NO


// B, E, C, F, A, D, G, H, I, J

// const score = 100; 
// let grade = "";

// if (score >= 90) {           
//     grade = "A"; 
// } else if (score >= 80) {
//     grade = "B";
// } else {
//   grade = "C";
// }
// console.log(`Grade: ${grade}`);

// part 2

let orderTotal = 500;
let country = "international";
let isMember = true;

let shippingCost;

// if orderTotal goes to the top for bypasses all rules should total amount be over 500
if(orderTotal > 500) {
  shippingCost = 0;
} else if (isMember) {
  shippingCost = 0;
} else if (country === "local" && orderTotal > 50) {
  shippingCost = 0;
} else if (country === "local") {
  shippingCost = 5;
} else {
  shippingCost = 15;
}

let label = shippingCost === 0 ? "Free shipping" : `Shipping: $${shippingCost}`;

console.log(label);
