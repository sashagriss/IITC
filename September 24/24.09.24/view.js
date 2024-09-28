import { utils } from "./utils.js";

function filterFirst(firstName) {
  let gEmployees = utils.getFromStorage("employees");
  const fakeEmployees = gEmployees.filter(
    (employee) => employee.firstName.toUpperCase() === firstName.toUpperCase()
  );
  return fakeEmployees;
}
function filterLast(lastName) {
  let gEmployees = utils.getFromStorage("employees");
  const fakeEmployees = gEmployees.filter(
    (employee) => employee.lastName.toUpperCase() === lastName.toUpperCase()
  );
  return fakeEmployees;
}
function filterAge(age) {
  let gEmployees = utils.getFromStorage("employees");
  const fakeEmployees = gEmployees.filter(
    (employee) => Number(employee.age) === Number(age)
  );
  return fakeEmployees;
}
function filterDep(department) {
  let gEmployees = utils.getFromStorage("employees");
  const fakeEmployees = gEmployees.filter(
    (employee) => employee.department === department
  );
  return fakeEmployees;
}

function filterSalary(salary) {
  let gEmployees = utils.getFromStorage("employees");
  const fakeEmployees = gEmployees.filter(
    (employee) => Number(employee.salary) === Number(salary)
  );
  return fakeEmployees;
}
function filterStartDate(startDate, endDate) {
  let gEmployees = utils.getFromStorage("employees");
  const fakeEmployees = gEmployees.filter(
    (employee) =>
      new Date(employee.startDate) >= new Date(startDate) &&
      new Date(employee.startDate) <= new Date(endDate)
  );
  return fakeEmployees;
}

export const view = {
  filterFirst,
  filterLast,
  filterAge,
  filterDep,
  filterSalary,
  filterStartDate,
};
