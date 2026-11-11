// 1. Parsons

// Goal output:

// ```
// true
// false
// ```

// ```
// A   function isEven(n) {
// B   return n % 2 === 0;
// C   }
// D   console.log(isEven(4));
// E   console.log(isEven(7));
// X   return n % 2;
// Y   console.log(n % 2 === 0);
// ```

   function isEven(n) {
   return n % 2 === 0;
   }
   console.log(isEven(4));
   console.log(isEven(7));

   // A,B,C,D,E


// ### 2. Modify

// > Add a function `isGoodTip(percent)` to your tip calculator. It returns `true` if the percent is 15 or more, `false` otherwise.
// >
// > Then, **outside the function**, use it with a ternary to log either `"Generous"` or `"Standard"`.
// >
// > Write one sentence: why does `isGoodTip` return `true`/`false` instead of returning the word?

// ---

 function calculateTip(bill, percentage) {
  return (bill * percentage) / 100;
}

function calculateTotal(bill, tip) {
  return bill + tip;
}

const splitBill = (total, people) => total / people;

function format(amount) {
  return `$${amount}`;
}

function isGoodTip(percent) {
  return percent >= 15;
}

const bill = 100;
const tip = calculateTip(bill, 10);
const total = calculateTotal(bill, tip);
const perPerson = splitBill(total, 2);

console.log(isGoodTip(10) ? "Generous" : "Standard");

console.log(
  `Tip: ${format(tip)}, total ${format(total)}, each ${format(perPerson)} `,
);


// **Submit in `#lvl-2-homework-or-exercise-subm` before the next session.**

// Stuck? _"I got stuck at \_\_\_ and here's what I tried"_ is a great question — post it.
