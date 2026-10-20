// Session 03 — your before-class prediction snippet.

console.log("predict.js running");

let count = "10" - 2;
console.log(count); // 8, 8 and data type is a number.

// Which of these are falsy: 0, "0", "", " ", null
// 0, "", null
// "", null

// What is x at the end

let x = 10;
if (x > 11) {
  x = x * 2;
} else if (x > 5) {
  x = 0;
}
console.log(x);

const label = 0 ? "Yes" : "no";

console.log(label); //

// condition1; output1 : condition2 ? output2 : fallback

function getLabel(priority) {
  if (priority === 1) {
    return "Urgent";
  }

  if (priority === 2) {
    console.log("Normal");
  }
}

console.log(getLabel(1)); // Urgent // Urgent // Urgent
console.log(getLabel(2)); // Normal // Normal, Undefined // Normal
console.log(getLabel(3)); // Undefined // Undefined // Undefined.
