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

const tasks = [
  { title: "Buy milk", isDone: false },
  { title: "Call bank", isDone: true },
];

// Goal: mark the first task done, add a third task, and print `3 true`.

// ```
// A   tasks[0].isDone = true;
// B   tasks.push({ title: "Walk dog", isDone: false });
// C   console.log(tasks.length, tasks[0].isDone);
// X   tasks.isDone = true;
// Y   tasks.push("Walk dog");

tasks[0].isDone = true;
tasks.push({ title: "Walk dog", isDone: false });
console.log(tasks.length, tasks[0].isDone);
tasks.pop();
console.log(tasks);


// const searchProductHistory = ["Laptop", "Socks", ];

// searchProductHistory.push("Laptop");
// searchProductHistory.push("Socks")


const cart = [];

cart.push({name: "shirt", price: 1.99})