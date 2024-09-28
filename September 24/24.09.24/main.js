import { model } from "./model.js";
import { utils } from "./utils.js";
import { view } from "./view.js";
let employeeEdit = null;

const elForm = document.querySelector("form");

const elTbEmployee = document.querySelector("tbody");

const btnAdd = document.getElementById("btn-add");

const btnSort = document.querySelector(".btn-filter");

const elInputFirstName = document.getElementById("first-name");
const elInputLastName = document.getElementById("last-name");
const elInputAge = document.getElementById("age");
const elInputDep = document.getElementById("dep");
const elInputSalary = document.getElementById("salary");

const elList = document.getElementById("id-ul");
const elLies = document.querySelectorAll("#id-ul li");

const elSortDiv = document.querySelector(".sorted");

function renderEmployees(fakeEmployees) {
  const gEmployees = fakeEmployees || utils.getFromStorage("employees");
  elTbEmployee.textContent = "";
  for (let i = 0; i < gEmployees.length; i++) {
    const employee = gEmployees[i];
    const rowEmployee = document.createElement("tr");
    rowEmployee.innerHTML = `
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.age}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td>${employee.startDate}</td>
        <td ><button id="edit">Edit</button>
         <button id="delete" >Delete</button></td>
        `;
    elTbEmployee.appendChild(rowEmployee);

    const btnDelete = rowEmployee.querySelector("#delete");
    const btnEdit = rowEmployee.querySelector("#edit");

    btnDelete.addEventListener("click", function (ev) {
      model.removeEmployee(employee.id);
      renderEmployees();
    });

    btnEdit.addEventListener("click", function (ev) {
      showDataInInput(employee.id);
      renderEmployees();
    });
  }
}

function handleAddClick() {
  if (!employeeEdit) {
    model.addEmployee(
      elInputFirstName.value,
      elInputLastName.value,
      elInputAge.value,
      elInputSalary.value,
      elInputDep.value
    );
  } else {
    model.editEmployee(
      employeeEdit,
      elInputFirstName.value,
      elInputLastName.value,
      elInputAge.value,
      elInputSalary.value,
      elInputDep.value
    );
    btnAdd.textContent = "Add";
    employeeEdit = null;
  }
  elInputFirstName.value = "";
  elInputLastName.value = "";
  elInputAge.value = "";
  elInputSalary.value = "";
  elInputDep.value = "";
  renderEmployees();
}

function showDataInInput(id) {
  let gEmployees = utils.getFromStorage("employees");
  const employeeEditMe = gEmployees.find(
    (currentEmployee) => id === currentEmployee.id
  );
  elInputFirstName.value = employeeEditMe.firstName;
  elInputLastName.value = employeeEditMe.lastName;
  elInputAge.value = employeeEditMe.age;
  elInputSalary.value = employeeEditMe.salary;
  elInputDep.value = employeeEditMe.department;

  btnAdd.textContent = "complete";
  employeeEdit = id;
}
// events
elForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
});

btnAdd.addEventListener("click", handleAddClick);

btnSort.addEventListener("click", function () {
  elList.classList.toggle("hidden");
});

elLies.forEach((li) => {
  li.addEventListener("click", function () {
    switch (li.textContent.trim()) {
      case "- All -":
        renderEmployees();
        // InputFirstName.style.display = "none";
        // InputLastName.style.display = "none";
        // InputAge.style.display = "none";
        // InputSalary.style.display = "none";
        // InputDep.style.display = "none";
        location.reload(true);
        break;
      case "First Name":
        elSortDiv.innerHTML = `
        <input type="text" id="first" placeholder="First name">
        <button class="btn-search" >Search</button>
        `;
        const InputFirstName = document.getElementById("first");
        elSortDiv
          .querySelector(".btn-search")
          .addEventListener("click", (e) => {
            renderEmployees(view.filterFirst(InputFirstName.value));
          });

        break;
      case "Last Name":
        elSortDiv.innerHTML = `
        <input type="text" id="last" placeholder="Last name">
        <button class="btn-search">Search</button>
        `;
        const InputLastName = document.getElementById("last");
        elSortDiv
          .querySelector(".btn-search")
          .addEventListener("click", (e) => {
            renderEmployees(view.filterLast(InputLastName.value));
          });

        break;
      case "Age":
        elSortDiv.innerHTML = `
        <input type="number" id="age-sort" placeholder="18" min="18" max="120">
        <button class="btn-search">Search</button>
        `;

        const InputAge = document.getElementById("age-sort");
        elSortDiv
          .querySelector(".btn-search")
          .addEventListener("click", (e) => {
            renderEmployees(view.filterAge(InputAge.value));
          });
        break;
      case "Department":
        elSortDiv.innerHTML = `
        <select id="department-inSort">
        <option selected disabled >Department</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="IT">IT</option>
          <option value="Operations">Operations</option>
        </select>
        <button class="btn-search">Search</button>
        `;
        const InputDep = document.getElementById("department-inSort");
        elSortDiv
          .querySelector(".btn-search")
          .addEventListener("click", (e) => {
            renderEmployees(view.filterDep(InputDep.value));
          });

        break;

      case "Salary":
        elSortDiv.innerHTML = `
          <input type="number" id="salary-sort" placeholder="7000" min="7000" max="100000">
          <button class="btn-search" >Search</button>
          `;
        const InputSalary = document.getElementById("salary-sort");
        elSortDiv
          .querySelector(".btn-search")
          .addEventListener("click", (e) => {
            renderEmployees(view.filterSalary(InputSalary.value));
          });
        break;
      case "Start date":
        elSortDiv.innerHTML = `
        <label>From:</label>
          <input type="date" class="date-start" >
          <label>To:</label>
            <input type="date" class="date-end">
            <button class="btn-search" >Search</button>
          `;
        const InputStartDate = document.querySelector(".date-start");
        const InputEndDate = document.querySelector(".date-end");
        elSortDiv
          .querySelector(".btn-search")
          .addEventListener("click", (e) => {
            renderEmployees(
              view.filterStartDate(InputStartDate.value, InputEndDate.value)
            );
          });
        break;
    }
    renderEmployees();
    elList.classList.toggle("hidden");
  });
});

renderEmployees();
