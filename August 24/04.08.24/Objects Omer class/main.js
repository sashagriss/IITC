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
console.log(getStudentById(students2, 1));

// 4.
let product = {
  name: "Laptop",
  price: 1200,
  isAvailable: true,
  categories: ["electronics", "computers", "tech"],
};
function toggleAvailability(product) {
  product.isAvailable = !product.isAvailable;
  return product.isAvailable;
}
console.log(toggleAvailability(product));

// 5.

function updatePrice(product, newPrice) {
  product.price = newPrice;
  return newPrice;
}
updatePrice(product, 1000);
console.log(product);

// 6.
function removeCategory(product, category) {
  for (let i = 0; i < product.categories.length; i++) {
    if (product.categories[i] === category) {
      product.categories.splice(i, 1);
    }
  }
  return product.categories;
}
removeCategory(product, "computers");
console.log(product);

// 7.
let products = [
  { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
  { name: "Mouse", price: 2500, sizes: ["S", "M"], isAvailable: false },
  { name: "Keyboard", price: 52, sizes: ["L", "XL"], isAvailable: true },
];

function findMostExpensiveProduct(products) {
  let maxPrice = 0;
  let item;
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > maxPrice) {
      maxPrice = products[i].price;
      item = i;
    }
  }
  return products[item];
}
console.log(findMostExpensiveProduct(products));

// 8.
function getAvailableSizes(products) {
  let arr = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].isAvailable) {
      for (let j = 0; j < products[i].sizes.length; j++) {
        if (!arr.includes(products[i].sizes[j])) {
          arr.push(products[i].sizes[j]);
        }
      }
    }
  }
  return arr;
}
console.log(getAvailableSizes(products));

// 9.
let studentit = {
  name: "Alice",
  age: 20,
};
function addProperty(studentit, key, value) {
  studentit[key] = value;
  return value;
}
addProperty(studentit, "grade", "A");
console.log(studentit);

// 10.
let school = {
  name: "Greenwood High",
  address: {
    city: "Springfield",
    zip: "12345",
  },
  students: [
    { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
    { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
  ],
};

function updateStudentGrade(school, studentId, subject, newGrade) {
  for (let i = 0; i < school.students.length; i++) {
    if (school.students[i].id === studentId) {
      school.students[i].grades[subject] = newGrade;
    }
  }
  return;
}
updateStudentGrade(school, 2, "math", 100);
console.log(school.students);

// 11
const orders = [
  { id: 1, product: "Laptop", status: "delivered" },
  { id: 2, product: "Mouse", status: "pending" },
  { id: 3, product: "Keyboard", status: "delivered" },
  { id: 4, product: "Monitor", status: "pending" },
  { id: 5, product: "Laptop", status: "shipped" },
];
const arr = [];
function getDeliveredOrders(orders) {
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].status === "delivered") {
      arr.push(orders[i]);
    }
  }
  return arr;
}
getDeliveredOrders(orders);
console.log(arr);

// 12.
const object = {};
function countProductOccurrences(orders) {
  for (let i = 0; i < orders.length; i++) {
    if (!object[orders[i].product]) {
      object[orders[i].product] = 1;
    } else {
      object[orders[i].product]++;
    }
  }
  return object;
}
countProductOccurrences(orders);
console.log(object);
