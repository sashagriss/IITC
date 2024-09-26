const employees_STORAGE_KEY = "employees";
let gEmployees = getFromStorage();
let fakeEmployess = [...gEmployees];

function makeId() {
  let id = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}
const elForm = document.querySelector("form");

const elTbEmployee = document.querySelector("tbody");

const btnAdd = document.getElementById("btn-add");
const btnDelete = document.getElementById("delete");
const btnEdit = document.getElementById("edit");
const btnSort = document.querySelector(".btn-filter");

const elInputFirstName = document.getElementById("first-name");
const elInputLastName = document.getElementById("last-name");
const elInputAge = document.getElementById("age");
const elInputDep = document.getElementById("dep");
const elInputSalary = document.getElementById("salary");

const elList = document.getElementById("id-ul");
const elLies = document.querySelectorAll("#id-ul li");

const elSortDiv = document.querySelector(".sorted");

function renderEmployees(fakeEmployess = gEmployees) {
  elTbEmployee.textContent = "";
  for (let i = 0; i < fakeEmployess.length; i++) {
    const employee = fakeEmployess[i];
    const rowEnmployee = document.createElement("tr");
    rowEnmployee.innerHTML = `
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.age}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td>${employee.startDate}</td>
        <td><button id="edit">Edit</button>
         <button onclick="removeEmployee('${employee.id}')" id="delete" >Delete</button></td>
        `;
    elTbEmployee.appendChild(rowEnmployee);
  }
}

function addEmployee() {
  const newEmployee = {
    id: makeId(),
    firstName: elInputFirstName.value,
    lastName: elInputLastName.value,
    age: elInputAge.value,
    startDate: getCurrentDateInYYYYMMDD(),
    salary: elInputSalary.value,
    department: elInputDep.value,
  };
  gEmployees.push(newEmployee);

  elInputFirstName.value = "";
  elInputLastName.value = "";
  elInputAge.value = "";
  elInputSalary.value = "";
  elInputDep.value = "";

  saveToStorage();
  renderEmployees();
}

function removeEmployee(id) {
  gEmployees = gEmployees.filter((employee) => employee.id !== id);
  saveToStorage();
  renderEmployees();
}

function filterFirst() {
  const inputName = document.getElementById("first");

  fakeEmployess = gEmployees.filter(
    (employee) =>
      employee.firstName.toUpperCase() === inputName.value.toUpperCase()
  );

  renderEmployees(fakeEmployess);
}
function filterLast() {
  const inputName = document.getElementById("last");

  fakeEmployess = gEmployees.filter(
    (employee) =>
      employee.lastName.toUpperCase() === inputName.value.toUpperCase()
  );

  renderEmployees(fakeEmployess);
}
function filterAge() {
  const inputAge = document.getElementById("age-sort");

  fakeEmployess = gEmployees.filter(
    (employee) => employee.age === inputAge.value
  );

  renderEmployees(fakeEmployess);
}
function filterDep() {
  const inputDep = document.getElementById("department-inSort");
  fakeEmployess = gEmployees.filter(
    (employee) => employee.department === inputDep.value
  );

  renderEmployees(fakeEmployess);
}
function filterSalary() {
  const inputSalary = document.getElementById("salary-sort");
  fakeEmployess = gEmployees.filter(
    (employee) => employee.salary === inputSalary.value
  );

  renderEmployees(fakeEmployess);
}
function filterStartDate() {
  const inputDate = document.getElementById("date-start");
  const inputEnd = document.getElementById("date-end");
  fakeEmployess = gEmployees.filter(
    (employee) =>
      new Date(employee.startDate) >= new Date(inputDate.value) &&
      new Date(employee.startDate) <= new Date(inputEnd.value)
  );

  renderEmployees(fakeEmployess);
  console.log("ddd");
}

elForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
});

btnAdd.addEventListener("click", addEmployee);

btnSort.addEventListener("click", function () {
  elList.classList.toggle("hidden");
});

elLies.forEach((li) => {
  li.addEventListener("click", function () {
    switch (li.textContent.trim()) {
      case "First Name":
        elSortDiv.innerHTML = `
        <input type="text" id="first" placeholder="First name">
        <button onclick="filterFirst()" id="btn-search">Search</button>
        `;
        break;
      case "Last Name":
        elSortDiv.innerHTML = `
        <input type="text" id="last" placeholder="Last name">
        <button onclick="filterLast()" id="btn-search">Search</button>
        `;
        break;
      case "Age":
        elSortDiv.innerHTML = `
        <input type="number" id="age-sort" placeholder="18" min="18" max="120">
        <button onclick="filterAge()" id="btn-search">Search</button>
        `;
        break;
      case "Department":
        elSortDiv.innerHTML = `
        <select id="department-inSort">
        <option selected disabled >Department</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
          <option value="hr">Human Resources</option>
          <option value="finance">Finance</option>
          <option value="it">Information Technology</option>
          <option value="operations">Operations</option>
        </select>
        <button onclick="filterDep()" id="btn-search">Search</button>
        `;
        break;
      case "Salary":
        elSortDiv.innerHTML = `
          <input type="number" id="salary-sort" placeholder="7000" min="7000" max="100000">
          <button onclick="filterSalary()" id="btn-search">Search</button>
          `;
        break;
      case "Start date":
        elSortDiv.innerHTML = `
        <label>From:</label>
          <input type="date" id="date-start" >
          <label>To:</label>
            <input type="date" id="date-end">
            <button onclick="filterStartDate()" id="btn-search">Search</button>
          `;
        break;
    }
    renderEmployees();
    elList.classList.toggle("hidden");
  });
});

function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(employees_STORAGE_KEY)) || [];
}

function saveToStorage(key, value) {
  localStorage.setItem(employees_STORAGE_KEY, JSON.stringify(gEmployees));
}

function getCurrentDateInYYYYMMDD() {
  const date = new Date();
  return date.toISOString().split("T")[0];
}

renderEmployees();
