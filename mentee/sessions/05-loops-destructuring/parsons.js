// Session 05 — the line-ordering puzzle.

console.log("parsons.js running");


// Goal output 35


// A   const prices = [5, 10, 20];
// B   let total = 0;
// C   for (const price of prices) {
// D   total = total + price;
// E   }
// F   console.log(total);
// X   total = price;
// Y   const total = 0;

const prices = [5, 10, 20];
let total = 0;
for (const price of prices) {
  total = total + price;
}
console.log(total);



// Goal: `findTask(tasks, "Call bank")` returns the Call bank object. `findTask(tasks, "Walk dog")` returns `null`.

// ```
// A   function findTask(tasks, title) {
// B   for (const task of tasks) {
// C   if (task.title === title) {
// D   return task;
// E   }
// F   }
// G   return null;
// H   }
// X   } else { return null; }

const tasks = [
  { title: "Gym", isDone: true },
  { title: "Call bank", isDone: false },
  { title: "Buy Grocieries", isDone: false },
];

function findTask(tasks, title) {
  // A
  for (const task of tasks) {
    // B
    if (task.title === title) {
      // C
      return task; // D
    } // E
  } // F
  return null; // G
} // H

console.log(findTask(tasks, "Call bank"));

console.log(findTask(tasks, "Walk dog"));


// Number the list — `1. Buy milk`, `2. Call bank`, `3. Pay rent`:

// ```js
// const tasks = ["Buy milk", "Call bank", "Pay rent"];

// for (let i = ____; i ____ tasks.length; i++) {
//   console.log(`${____}. ${tasks[i]}`);
// }
// ```