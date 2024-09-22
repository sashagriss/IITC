// "use strict";
// let gToDoList = [
//   // {
//   //   id: makeId(),
//   //   status: false,
//   //   text: "",
//   // },
//   // {
//   //   id: makeId(),
//   //   status: false,
//   //   text: "",
//   // },
//   // {
//   //   id: makeId(),
//   //   status: false,
//   //   text: "baba",
//   // },
// ];

// function makeId() {
//   let id = "";
//   const possible =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   for (let i = 0; i < 5; i++) {
//     id += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return id;
// }
// function renderToDoList() {
//   const list = document.getElementById("to-do");
//   list.innerHTML = "";
//   for (let i = 0; i < gToDoList.length; i++) {
//     const item = document.createElement("li");
//     item.addEventListener("click", () => item.classList.toggle("done"));
//     console.log(gToDoList[i]);
//     item.textContent = gToDoList[i].text;
//     list.appendChild(item);
//     const btnDelete = document.createElement("button");
//     btnDelete.setAttribute("class", "delete");
//     btnDelete.textContent = "Remove task";
//     btnDelete.addEventListener("click", removeTask);
//     item.appendChild(btnDelete);
//     function removeTask() {
//       item.remove();
//     }
//   }
// }
// const buttonAddItem = document.getElementById("button-add-item");
// buttonAddItem.addEventListener("click", addItem);
// const inputText = document.getElementById("input");
// renderToDoList();
// function addItem() {
//   gToDoList.push({
//     id: makeId(),
//     status: false,
//     text: inputText.value,
//   });
//   console.log(gToDoList);

//   inputText.value = "";
//   renderToDoList();
// }
