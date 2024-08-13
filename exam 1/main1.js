const myProducts = [
  { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
  { name: "Shirt", price: 500, categories: ["clothing"] },
  { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
];

// 5.

function countProductsInCategory(array, category) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    {
      if (array[i].categories.includes(category)) {
        count++;
      }
    }
  }
  return count;
}
console.log(countProductsInCategory(myProducts, "electronics"));

// 7.

function getProductsByCategory(array, category) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].categories.includes(category)) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

console.log(getProductsByCategory(myProducts, "electronics"));

// // 10.
// function countProductOccurrences(array, char) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countProductOccurrences(strings, "s"));
// console.log(countProductOccurrences(strings, "c"));

// 11.
function updatePriceByName(array, name, price) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === name) {
      array[i].price = price;
    }
  }
  return price;
}
// console.log(updatePriceByName(myProducts, "Phone", 550));

// // 13.
// function groupStringsBySpaces(array) {
//   obj = {};
//   for (let i = 0; i < array.length; i++) {
//     let count = 0;
//     for (let j = 0; j < array[i].length; j++) {
//       if (array[i][j] === " ") {
//         count++;
//       }
//       if (!obj[count]) {
//         obj[count] = [];
//       }
//       obj[count].push(array[i]);
//     }
//   }
//   return obj;
// }
// console.log(groupStringsBySpaces(strings));

// 14.
let stringed = [
  "baba",
  "my success",
  "no more lives",
  "and of session",
  "good discussion",
];
function groupStringsByLength(array) {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let newArr = array[i].length;
    if (!obj[newArr]) {
      obj = [];
      obj[newArr] = newArr;
    } else {
      obj.push(newArr);
    }
  }
  return obj;
}
// console.log(groupStringsByLength(stringed));

("use strict");

// Example Data
const employee = {
  name: "Alice",
  position: "Developer",
  salary: 5000,
  skills: ["JavaScript", "React"],
};

const orders = [
  { orderId: 1, product: "Laptop", quantity: 2, price: 1500 },
  { orderId: 2, product: "Phone", quantity: 1, price: 800 },
  { orderId: 3, product: "Tablet", quantity: 3, price: 600 },
];

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
];

const words = ["hello", "world", "javascript", "developer", "programming"];

// 😅 Task 1: Update Employee Position 😅
// TODO: Write a function to update the employee's position (You can mutate the original object)
function updatePosition(employee, newPosition) {}

updatePosition(employee, "Senior Developer");
// console.log("Updated Employee:", employee);

// 😅 Task 2: Add Skill to Employee 😅
// TODO: Write a function to add a new skill to the employee's skills (You can mutate the original object)
function addSkill(employee, skill) {
  // your code here
}

addSkill(employee, "Node.js");
// console.log("Updated Employee:", employee);

// 😅 Task 3: Calculate Total Order Value 😅
// TODO: Write a function to calculate the total value of all orders
function calculateTotalOrderValue(orders) {
  // your code here
}

const totalOrderValue = calculateTotalOrderValue(orders);
// console.log("Total Order Value:", totalOrderValue);

// 🙂 Task 4: Find Book by Title 🙂
// TODO: Write a function to find a book by title
function findBookByTitle(books, title) {
  // your code here
}

const foundBook = findBookByTitle(books, "1984");
// console.log("Found Book:", foundBook);

// 🙂 Task 5: Count Books by Author 🙂
// TODO: Write a function to count the number of books by a given author
function countBooksByAuthor(books, author) {
  // your code here
}

const bookCount = countBooksByAuthor(books, "George Orwell");
// console.log("Books by George Orwell:", bookCount);

// 🙂 Task 6: Get Book Titles 🙂
// TODO: Write a function to get an array of all book titles
function getBookTitles(books) {
  // your code here
}

const titles = getBookTitles(books);
// console.log("Book Titles:", titles);

// 🤨 Task 7: Get Orders by Product 🤨
// TODO: Write a function to get orders by product name
function getOrdersByProduct(orders, product) {
  // your code here
}

const laptopOrders = getOrdersByProduct(orders, "Laptop");
// console.log("Laptop Orders:", laptopOrders);

// 🤨 Task 8: Calculate Average Book Year 🤨
// TODO: Write a function to calculate the average publication year of all books
function calculateAverageBookYear(books) {
  // your code here
}

const averageYear = calculateAverageBookYear(books);
// console.log("Average Book Year:", averageYear);

// 🤨 Task 9: Add New Order 🤨
// TODO: Write a function to add a new order (You can mutate the original array)
function addOrder(orders, newOrder) {
  // your code here
}

addOrder(orders, { orderId: 4, product: "Monitor", quantity: 1, price: 300 });
// console.log("Updated Orders:", orders);

// 😥 Task 10: Count Vowel Occurrences 😥
// TODO: Write a function to count the occurrences of vowels in an array of strings
function countVowelOccurrences(words) {
  // your code here
}

const vowelCount = countVowelOccurrences(words);
// console.log("Vowel Occurrences:", vowelCount);

// 😥 Task 11: Update Book Year by Title 😥
// TODO: Write a function to update the year of a book by its title (You can mutate the original object)
function updateBookYearByTitle(books, title, newYear) {
  // your code here
}

updateBookYearByTitle(books, "1984", 1950);
// console.log("Updated Books:", books);

// 😥 Task 12: Get Capitalized Words 😥
// TODO: Write a function to get an array of words with each word capitalized (You should return a new array)
function getCapitalizedWords(words) {
  // your code here
}

const capitalizedWords = getCapitalizedWords(words);
// console.log("Capitalized Words:", capitalizedWords);

// 🥵 Task 13: Group Orders by Product 🥵
// TODO: Write a function to group orders by product name.
// The function should return an object where keys are product names and values are arrays of orders.

function groupOrdersByProduct(orders) {
  // your code here
}

const groupedOrders = groupOrdersByProduct(orders);
// console.log("Grouped Orders By Product:", groupedOrders);

// 🥵 Task 14: Group Books by Year 🥵
// TODO: Write a function to group books by publication year.
// The function should return an object where keys are publication years and values are arrays of books.

function groupBooksByYear(books) {
  // your code here
}

const groupedBooks = groupBooksByYear(books);
// console.log("Grouped Books By Year:", groupedBooks);

// 🥵 Task 15: Title Case Words 🥵
// TODO: Write a function to title case each word in the array (You should return a new array)
// Bonus: Title case the first letter of each word in a string (split by space)
function titleCaseWords(words) {
  // your code here
}

const titleCasedWords = titleCaseWords(words);
// console.log("Title Cased Words:", titleCasedWords);
