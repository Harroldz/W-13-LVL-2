// Session 07 — your before-class prediction snippet.

console.log("predict.js running");

document.querySelector(".demo") // class
document.querySelector("#demo") // id
document.getElementById("demo") // id
document.querySelector

// Warm Up
// 1. What's in `out`?
//    ```js
//    const nums = [1, 2, 3];
//    const out = nums.map((n) => { n * 2; });
//   console.log(out);
//    ```

// 2. `[1, 2, 3].filter((n) => n > 1).length` gives?
//      console.log(filteredNums);
//      console.log(filteredNums.length);

// 3. What's `a[0].x` at the end?
//    ```js
//    const a = [{ x: 1 }];
//    const b = a;
//    b[0].x = 5;
//    console.log(a);
//    console.log(b);
//    console.log(a[0].x);
//    ```

// 4. What does `tasks.find((t) => t.id === 99)` give when there's no task 99?

// const tasks = [
//   { id: 1, title: "Buy groceries" },
//   { id: 2, title: "Study JavaScript" },
//   { id: 3, title: "Clean room" },
// ];

// const result = tasks.find((t) => t.id === 99);

// console.log(result);

// Prediction - What will the page show?

// const tasks = [{ title: "Buy milk", isDone: false }];
// const list = document.querySelector("#task-list");

// function createTaskElement({ title, isDone }) {
//   const item = document.createElement("li");
//   item.textContent = isDone ? `✓ ${title}` : title;
//   return item;
// }

// function render() {
//   list.textContent = "";
//   tasks.forEach((task) => { list.append(createTaskElement(task)); });
// }

// render();

// tasks.push({ title: "Call bank", isDone: false });
// tasks[0].isDone = true;
