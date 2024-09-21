const item = document.getElementById("content");
item.classList.add("lala");

// const text = document.querySelectorAll(".text");
// for (let i = 0; i < text.length; i++) {
//   text[i].style.color = "red";
// }

//
//
// const list = document.querySelectorAll("li");
// for (let i = 0; i < list.length; i++) {
//   console.log(list[i].textContent);
// }
//
//
//
const list = document.querySelectorAll("#list li");
for (const li of list) {
  console.log(li.textContent);
}

const button = document.getElementById("highlight");
button.addEventListener("click", addYellowClass);
function addYellowClass() {
  list.forEach((li) => {
    li.classList.toggle("yellow");
  });
}

const list2 = document.getElementById("list2");
const addButton = document.getElementById("addButton");
const buttonFirst = document.getElementById("button-first");
const buttonLast = document.getElementById("button-last");
const buttonSelected = document.getElementById("button-selected");

addButton.addEventListener("click", addItem);
function addItem() {
  const li = document.createElement("li");
  li.textContent = "New item";
  list2.appendChild(li);
  li.addEventListener("click", toggleSellected);
}
function toggleSellected() {
  const list = document.querySelectorAll("#list2 li");
  list.forEach((li) => {
    li.classList.remove("selected");
  });
  this.classList.add("selected");
}

buttonFirst.addEventListener("click", removeFirst);
function removeFirst() {
  if (list2.children[0]) {
    list2.children[0].remove(list2.firstChild);
  }
}
buttonLast.addEventListener("click", removeLast);
function removeLast() {
  if (list2.lastElementChild) list2.removeChild(list2.lastElementChild);
}
buttonSelected.addEventListener("click", removeSelected);
function removeSelected() {
  const selected = list2.querySelectorAll(".selected");
  if (selected) {
    selected.forEach((li) => {
      list2.removeChild(li);
    });
  }
}

// function removeFirst() {
//   if (list2.children[0]) list2.removeChild(list2.firstChild);
// }

// function removeSelected() {
//   console.log("hi");
//   const allLi = document.querySelectorAll(".selected");
//   for (const li of allLi) list2.removeChild(li);
// }

// 4 //////////////
const input = document.querySelector("#nameInput");
const greeting = document.querySelector("#greeting");
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
submit.addEventListener("click", greet);
function greet() {
  greeting.textContent = `Hello ${input.value}`;
}
clear.addEventListener("click", clearTheField);
function clearTheField() {
  greeting.textContent = "";
  input.value = "";
}

const box = document.getElementById("box");
box.classList.add("box");
const style = document.getElementById("style");
style.addEventListener("click", changeStyle);
function changeStyle() {
  box.classList.toggle("newClass");
  document.documentElement.style.setProperty(
    "--random-color",
    getRandomColor()
  );
}
function getRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
// 5//////////
const click = document.getElementsByClassName("click");
for (let i = 0; i < click.length; i++) {
  click[i].addEventListener("click", () =>
    alert(`Button ${i + 1} was clicked`)
  );
}
