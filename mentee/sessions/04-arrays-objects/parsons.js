// Session 04 — the line-ordering puzzle.

console.log("parsons.js running");

// Using the same `user`, log the title of her second task — **one step per line**.

// Goal output: `Call bank`

const user = {
  name: "John",
  tasks: [
    { title: "Buy Milk", isDone: false },
    { title: "Call Bank", isDone: true },
  ],
};

// A   const tasks = user.tasks;
// B   const second = tasks[1];
// C   console.log(second.title);
// X   const second = tasks[2];
// Y   const tasks = user[tasks];

// const tasks = user[tasks];
// const second = tasks[1];
// console.log(second.title);

// Using dot notation example
// const tasks = user.tasks;
// const second = tasks[1];
// console.log(second.title);

// Using braket notation example
// const tasks = user["tasks"];
// const second = tasks[1];
// console.log(second["title"]);

// const student = {
//   name: "Bob",
//   age: "33",
// };

// // console.log(student.name); // Bob
// // console.log(student.age); // 33

// const property = "name";
// console.log(student[property]);

// const tasks = [
//   { title: "Buy milk", isDone: false },
//   { title: "Call bank", isDone: true },
// ];

// Goal: mark the first task done, add a third task, and print `3 true`.

// ```
// A   tasks[0].isDone = true;
// B   tasks.push({ title: "Walk dog", isDone: false });
// C   console.log(tasks.length, tasks[0].isDone);
// X   tasks.isDone = true;
// Y   tasks.push("Walk dog");

// tasks[0].isDone = true;
// tasks.push({ title: "Walk dog", isDone: false });
// console.log(tasks.length, tasks[0].isDone);
// tasks.pop();
// console.log(tasks);

// const searchProductHistory = ["Laptop", "Socks", ];

// searchProductHistory.push("Laptop");
// searchProductHistory.push("Socks")

// const cart = [];

// cart.push({name: "shirt", price: 1.99})

// cart.push({name: "socks", price: 2.99});

// [
//     {name: "shirt", price: 1.99}
//     {name: "socks", price: 2.99}
// ]

// Fill in the blank
// const tasks = [
//     {title: "Buy Milk"},
//     {title: "Call Bank"},
//     {title: "Pay Tent"}
// ];

// function getTitle(task){
//     return task.____
// }

// const last = tasks[tasks.____ - 1]
// console.log(getTitle(last)) // Pay rent

const tasks = [
  { title: "Buy Milk" }, // 0
  { title: "Call Bank" }, // 1
  { title: "Pay Rent" }, // 2
];

function getTitle(task) {
  return task.title;
}

const last = tasks[tasks.length - 1];
console.log(getTitle(last)); // Pay rent


tasks.length // 3
tasks.length - 1 // 2 

tasks[2]//  { title: "Pay Rent" }


// The design check gains its third question: **what shape is the data?** — answered _first_.


// > A **shopping cart**. It holds items. Each item has a name, a price, and how many you're buying. The app shows how many different items are in the cart, and a line for each one like `3 × Pen: $6`.
// >
// > 1. Describe the data's shape **in English**, then write **one example item**
// > 2. List the functions: name, what each needs, what each gives back