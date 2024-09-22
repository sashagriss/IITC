function makeId() {
  let id = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

let gTodos = [
  {
    id: makeId(),
    title: "clean room",
    isComplited: false,
  },
  {
    id: makeId(),
    title: "dishes",
    isComplited: false,
  },
  {
    id: makeId(),
    title: "feed the dog",
    isComplited: false,
  },
];
let gFilter = "all";
const elFilterBtns = document.querySelectorAll("#filter-buttons button");
// DOM elements
// We need form element to remove the "submit" issue with refreshing the page
const elTodoForm = document.getElementById("todo-form");

// Handling event listeners
elFilterBtns.forEach((currentBtn) =>
  currentBtn.addEventListener("click", handeFilterChange)
);

elTodoForm.addEventListener("submit", function (ev) {
  // Prevent from page refresh
  ev.preventDefault();
  // Get the input element value
  const elTodoInput = document.getElementById("todo-input");

  function handeFilterChange(ev) {
    gFilter = ev.target.textContent.toLowerCase();
  }
  // calling add todo function
  addTodo(elTodoInput.value);

  //   Clearing the input field
  elTodoInput.value = "";
});

// Render the todos
function renderTodos() {
  const elTodoList = document.getElementById("to-do");
  // Clear the list
  elTodoList.innerHTML = "";
  for (let i = 0; i < gTodos.length; i++) {
    // Creating todo element
    const elTodo = document.createElement("li");
    elTodo.textContent = gTodos[i].title;
    elTodo.classList.toggle("completed", gTodos[i].isComplited);
    // Creating todo element
    const elBtnDelete = document.createElement("button");
    elBtnDelete.textContent = "Remove task";

    // Adding toggle
    elTodo.addEventListener("click", function () {
      toggleTodo(gTodos[i].id);
    });
    // Adding event listener
    elBtnDelete.addEventListener("click", function () {
      deleteTodo(gTodos[i].id);
    });
    // Appending
    elTodo.appendChild(elBtnDelete);
    elTodoList.appendChild(elTodo);
  }
}

// Adding todo
function addTodo(todoTitle) {
  if (!todoTitle) return;
  // Create a new object (todo)
  const todo = {
    id: makeId(),
    title: todoTitle,
    isComplited: false,
  };

  // Push the new todo tu the gTodos array
  gTodos.push(todo);
  console.log(gTodos);
  // Call render renderTodos function
  renderTodos();
}
// Delete todo *from data-base, NOT HTM*
function deleteTodo(id) {
  gTodos = gTodos.filter((todo) => todo.id !== id);
  renderTodos();
}
// Toggle todo
function toggleTodo(id) {
  //  Find the todo that you want to toggle
  const todo = gTodos.find((todo) => todo.id === id);
  // Toggle isCompleted value (false if tue and true if false)
  if (!todo) return;
  todo.isComplited = !todo.isComplited;
  // Render todo
  renderTodos();
}
renderTodos();
