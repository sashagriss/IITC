import { utils } from "./utils.js";
const employees_STORAGE_KEY = "employees";

function addEmployee(firstName, lastName, age, salary, department) {
  let gEmployees = utils.getFromStorage(employees_STORAGE_KEY);
  const newEmployee = {
    id: utils.makeId(),
    firstName,
    lastName,
    age,
    startDate: utils.getCurrentDateInYYYYMMDD(),
    salary,
    department,
  };
  gEmployees.push(newEmployee);
  utils.saveToStorage(employees_STORAGE_KEY, gEmployees);
}

function removeEmployee(id) {
  let gEmployees = utils.getFromStorage(employees_STORAGE_KEY);
  gEmployees = gEmployees.filter((employee) => employee.id !== id);
  utils.saveToStorage(employees_STORAGE_KEY, gEmployees);
}

function editEmployee(id, firstName, lastName, age, salary, department) {
  let gEmployees = utils.getFromStorage(employees_STORAGE_KEY);
  const indexEmployee = gEmployees.findIndex(
    (currentEmployee) => id === currentEmployee.id
  );
  gEmployees[indexEmployee] = {
    id: id,
    firstName,
    lastName,
    age,
    startDate: gEmployees[indexEmployee].startDate,
    salary,
    department,
  };
  utils.saveToStorage(employees_STORAGE_KEY, gEmployees);
}

export const model = {
  addEmployee,
  removeEmployee,
  editEmployee,
};
