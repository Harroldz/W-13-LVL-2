// Session 06 — your before-class prediction snippet.

console.log("predict.js running");

const tasks = [
  { title: "Buy milk", isDone: false },
  { title: "Call bank", isDone: true },
  { title: "Pay rent", isDone: false },
];

const titles = tasks.map((task) => {
  return task.title;
});

const open = tasks.filter((task) => !task.isDone);

console.log(titles); //  ["buy milk", "call bank", "pay rent"]
console.log(open.length); // 2
console.log(tasks.length); // 3
