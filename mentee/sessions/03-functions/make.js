// Session 03 — what you build in class, and the exercise.

console.log("make.js running");

// > 1. At least **three functions**, each with **one job**
// > 2. **No `console.log` inside any function** — only at the end, outside them all
// > 3. Test it with **three different bills**. Write each result as a comment
// > 4. At least one function written as an **arrow function**

// > A **tip calculator**. The user has a bill amount, a tip percentage, and a number of people splitting the bill. The app shows the tip, the total, and what each person pays.

// List the functions you would need. For each one, write:

// Its name
// What it needs (parameters)
//what if gives back


// calculateTip => Bill amount and tip percentage => Tip amount
// calculateTotal => Bill amount and tip amount => the Total bill including the tips
// calculatePerperson => the total amount and the people => the amount each person pays

/*
    One function would be called addTipAmount.
    This function would need the bill amount and the tip percentage.
    This function would give back the amount of the bill with the tip added to that total.

    One function would be called splitBill.
    This function would need an amount representing the total bill with tip and an amount of people to split the total between.
    This function would give back the amount each person owes.
*/

// billTotal
// bill total, tip percentage, people
// bill total times the tip percentage
// bill total plus the tip 
// bill total divide it by the amount of people.
 // we would return the tip, total, what each person pays.

 // formatToal
 // amount
 // give back the amount .toFixed(2)


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

const bill = 100;
const tip = calculateTip(bill, 10);
const total = calculateTotal(bill, tip);
const perPerson = splitBill(total, 2);

console.log(
  `Tip: ${format(tip)}, total ${format(total)}, each ${format(perPerson)} `,
);
