"use strict";
// 1.
let student = [
  { id: "1", name: "omer", grade: 100 },
  { id: "2", name: "avi", grade: 40 },
  { id: "3", name: "gaga", grade: 80 },
];

function getValuesFromKey(array, key) {
  let studentArray = [];
  for (let i = 0; i < array.length; i++) {
    studentArray.push(student[i][key]);
  }
  return studentArray;
}
console.log(getValuesFromKey(student, "id"));
console.log(getValuesFromKey(student, "name"));

// 2.

function getPassStudents(array, grade) {
  let passedStudentsArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].grade > grade) {
      passedStudentsArray.push(array[i]);
    }
  }
  return passedStudentsArray;
}
console.log(getPassStudents(student, 60));

// 3.
function createPersons(names) {
  let persons = [];
  for (let i = 0; i < names.length; i++) {
    let newPerson = { name: names[i] };
    persons.push(newPerson);
  }
  return persons;
}
console.log(createPersons(["yossi", "liraz", "baba"]));

/* 
  Write a function "groupBy" that takes 
  an array of objects and a key.
  returns an object where each key is a unique value 
  from the employees array and the corresponding value 
  is an array containing the employees that belong to that key.
  Example:
*/
let employees = [
  { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
  { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
  { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
  { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
  { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
  { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
];

console.log(groupBy(employees, "department"));

function groupBy(array, key) {
  let group = {};

  return group;
}

/* 
  Write a function "groupBy" that takes 
  an array of objects and a key.
  returns an object where each key is a unique value 
  from the employees array and the corresponding value 
  is an array containing the employees that belong to that key.
  Example:
*/
let employee = [
  { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
  { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
  { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
  { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
  { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
  { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
];

function groupBy(array, key) {
  let group = {};
  for (let i = 0; i < array.length; i++) {
    let groupKey = array[i][key];
    group[groupKey] = [];

    if (group[groupKey] === undefined) {
      group[groupKey] = [];

      group[groupKey].push(item);
      return group;
    }
  }
}
console.log(groupBy(employee, "department"));

/*
  {
    Engineering: [
      { name: 'John Doe', department: 'Engineering', yearsOfExp: 5 },
      { name: 'Peter Johnson', department: 'Engineering', yearsOfExp: 5 },
      { name: 'Mike Davis', department: 'Engineering', yearsOfExp: 3 }
    ],
    Marketing: [
      { name: 'Jane Smith', department: 'Marketing', yearsOfExp: 8 },
      { name: 'Lucy Brown', department: 'Marketing', yearsOfExp: 10 },
      { name: 'Sara Wilson', department: 'Marketing', yearsOfExp: 8 }
    ]
  }
  */
// HM

let person2 = {
  name: "John",
  age: 17,
  address: {
    city: "New York",
    zip: "10001",
  },
};
function updateCity(person, newCity) {
  person.address.city = newCity;
}
updateCity(person2, "Madrid");
console.log(person2);

// 2.

let students2 = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];

function getStudentNames(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].name);
  }
  return newArray;
}
console.log(getStudentNames(students2));

// 3.
function getStudentById(students, id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students[i];
    }
  }
}
console.log(getStudentById(students2, id.students2));

// !!!!!!!!!!!!!!!!!!

let product = {
  name: "Laptop",
  price: 1200,
  isAvailable: true,
  categories: ["electronics", "computers", "tech"],
};
