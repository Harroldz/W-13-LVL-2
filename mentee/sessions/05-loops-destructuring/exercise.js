// # Session 05 — exercise

// _Due before the next session._

// ### 1. M1 Stage 2

// This is the main homework. Loop through every expense, `getTotal`, `getUnpaidTotal`, destructuring at least once — see the M1 brief.

const expenses = [
  { label: "Internet", amount: 45, category: "Home", isPaid: false },
  { label: "Rent", amount: 1200, category: "Housing", isPaid: false },
  { label: "Coffee", amount: 6, category: "Food", isPaid: true },
  { label: "Electric bill", amount: 150, category: "Utilities", isPaid: false },
  { label: "Netflix", amount: 16, category: "Entertainment", isPaid: true }
];


function describeExpense(expense) {
  return `${expense.label} — $${expense.amount} (${expense.category}, ${expense.isPaid ? "paid" : "unpaid"})`;
}

function getPriority(expense) {
  // Check paid first so expenses already paid aren't marked as urgent.
  if (expense.isPaid) {
    return "Paid";
  } else if (expense.amount > 100) {
    return "Pay first";
  } else {
    return "Unpaid";
  }
}

console.log(describeExpense(expenses[0]));
console.log(getPriority(expenses[0]));

console.log(describeExpense(expenses[1]));
console.log(getPriority(expenses[1]));

console.log(describeExpense(expenses[2]));
console.log(getPriority(expenses[2]));

console.log(describeExpense(expenses[3]));
console.log(getPriority(expenses[3]));

console.log(describeExpense(expenses[4]));
console.log(getPriority(expenses[4]));



// ### 2. Parsons — count

// Goal output: `2` (how many scores are 60 or above)

// ```
// A   const scores = [72, 55, 91, 40];
// B   let count = 0;
// C   for (const score of scores) {
// D   if (score >= 60) {
// E   count = count + 1;
// F   }
// G   }
// H   console.log(count);
// X   count = 1;
// Y   let count;
// ```

   const scores = [72, 55, 91, 40];

   let count = 0;

   for (const score of scores) {
        if (score >= 60) {
            count = count + 1;
        }
   }

   console.log(count);

   //A,B,C,D,E,F,G,H


// **Submit in `#lvl-2-homework-or-exercise-subm` before the next session.**

// Stuck? _"I got stuck at \_\_\_ and here's what I tried"_ is a great question — post it. 