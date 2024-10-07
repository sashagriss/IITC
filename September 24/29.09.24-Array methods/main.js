// const passwords = ["abc123", "password", "mySecretPass", "qwerty", "123456789"];
// const hasMoreThan8 = passwords.some(function (password) {
//   return password.length >= 8;
// });

// const products = [
//   { name: "Laptop", price: 1500, quantity: 5 },
//   { name: "Smartphone", price: 800, quantity: 10 },
//   { name: "Tablet", price: 400, quantity: 8 },
//   { name: "Headphones", price: 150, quantity: 0 },
//   { name: "Smartwatch", price: 300, quantity: 7 },
// ];

// const notavailable = products.find((product) => {
//   return product.quantity === 0;
// });
// console.log(notavailable);

// // 2

// const students = [
//   { name: "Dan", averageGrade: 85 },
//   { name: "Sara", averageGrade: 92 },
//   { name: "Noa", averageGrade: 78 },
//   { name: "Yossi", averageGrade: 88 },
//   { name: "Lior", averageGrade: 95 },
// ];

// students.sort((a, b) => {
//   if (b.averageGrade !== a.averageGrade) {
//     return b.averageGrade - a.averageGrade;
//   } else {
//     students.sort(a.b);
//     return "a,b,c,d";
//   }
// });
// console.log(students);

//  HOME WORK ////
// 1.
const array1 = [1, 2, 3, 4, 5];

// array1.forEach((element) => {
//   console.log(element);
// });

// 2.
// let sum = 1;
// array1.forEach((element, index) => {
//   console.log(index % 2 === 0 ? (sum *= element) : "bye");
// });
// // 3.
let emptyArr = [];
array1.forEach((element) => {
  emptyArr.push(element ** 2);
});
// console.log(emptyArr);
// // 4.
let newSum = 0;
array1.forEach((element) => {
  emptyArr.push((newSum += element));
});
// console.log(newSum);
// 5.
const strArray = ["Hello", " ", "World", "!"];
let strSum = "";
strArray.forEach((element) => {
  return (strSum += element);
});
// console.log(strSum);
// 6.
const array2 = array1.map((element) => {
  return element * 2;
});
// console.log(array2);
// 7.
const fruitArr = ["apple", "banna", "strawberry"];
const newFruitArr = fruitArr.map((element) => {
  return element.length;
});
// console.log(newFruitArr);
// 8.
const array3 = [1, 4, 9, 16, 25];
const newAsrray3 = array3.map((element) => {
  return Math.sqrt(element);
});
// console.log(newAsrray3);
// 9.
// const greeting = ["Hello", "world"];
// const wholeGreeting = greeting.map((element) => {
//   return element.toUpperCase();
// });
// console.log(wholeGreeting);
const greeting = ["Hello", "world"];
const wholeGreeting = greeting.map((element) => {
  return element.split(" ");
});
// console.log(wholeGreeting);
// 10.
const falseArr = [true, false, true];
const trueArr = falseArr.map((element) => {
  return !element;
});
// console.log(trueArr);
// 11.
const array5 = [1, 2, 3, 4, 5, 6];
const newArr5 = array5.filter((number) => {
  return number % 2 === 0;
});
// console.log(newArr5);
// 12.
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const filterFruit = fruits.filter((str) => str.length > 5);
// console.log(filterFruit);
// 13.
const arr6 = [5, 10, 15, 20, 25];
const newArr6 = arr6.filter((number) => number > 10);
// console.log(newArr6);

// 14.
const strangeFruit = fruits.filter((str) => str[0] === "A");
// console.log(strangeFruit);
// 15.
const newArr7 = array5.filter((number, index) => index % 2 === 0);
// console.log(newArr7);
// 16.
// REDUCE
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const sum = array5.reduce((acc, value) => {
  return value + acc;
}, 0);
// console.log(sum);
// 17.
const machpela = array5.reduce((acc, value) => {
  return acc * value;
}, 1);
console.log(machpela);
// 18.
const theBiggest = arr6.reduce((acc, value) => {
  return Math.max(acc, value);
}, 0);
// console.log(theBiggest);
// 19.
const hibur = strArray.reduce((acc, str) => {
  return acc + str;
}, "");
// console.log(hibur);
// 20.
const arr8 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const count = arr8.reduce((acc, number) => {
  acc[number] = acc[number] ? acc[number] + 1 : 1;
  return acc;
}, {});
// console.log(count);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// 21.
const some3 = array5.some((number) => number > 3);
// console.log(some3);
// 22.
const zugi = [2, 4, 6, 8, 10];
const everyZugi = zugi.every((number) => number % 2 === 0);
// console.log(everyZugi);
// 23.
const someLonger = fruits.some((str) => str.length > 6);
// console.log(someLonger);
// 24.
const consonants = "bcdfghjklmnpqrstvwxyz";
const consonant = fruits.every((str) => consonants.includes(str[0]));
// console.log(consonant);
// 25.
const someTrue = [false, false, true, false];
const checkSome = someTrue.some((value) => value === true);
// console.log(checkSome);
// 26.
const findMore = array5.find((element) => element > 3);
// console.log(findMore);
// 27.
const findIndexZugi = array5.findIndex((element) => element % 2 === 0);
// console.log(findIndexZugi);

// 28.
const longer = fruits.find((str) => str.length > 8);
// console.log(longer);
// 29.
const findIndexFruit = fruits.findIndex((element) => element === "Elderberry");
// console.log(findIndexFruit);
// 30.
const third = [1, 2, 3, -4, 5, -6];
const thirdN = third.find((num) => num < 0);
// console.log(thirdN);
// 31.
const a10 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
a10.sort((a, b) => a - b);
// console.log(a10);

fruits.sort((a, b) => b.localeCompare(a));
// console.log(fruits);

a10.sort((a, b) => b - a);
// console.log(a10);

fruits.sort((a, b) => b.length - a.length);
console.log(fruits);

const obj = [
  { name: "Sasha", age: 25 },
  { name: "Masha", age: 30 },
  { name: "Olga", age: 20 },
];
obj.sort((a, b) => a.age - b.age);
// console.log(obj);
// 36.
const flatArr = [1, [2, 3], [4, [5, 6]]];
const flat = flatArr.flat(2);
// console.log(flat);
// 37.
const notFlat = [1, [2, [3, [4]]]];
const yesFlat = notFlat.flat(3);
// console.log(yesFlat);
// 38.
const arrEmpt = [1, 2, , 4, 5];
const notEmpt = arrEmpt.flat();
// console.log(notEmpt);
// 40.
const tryInfinity = [1, [2, [3, [4, [5]]]]];
const infinity1 = tryInfinity.flat(Infinity);
// console.log(infinity1);
// ////////////////////////Easy ended/////////////////////////////////////
// 41.
const alpabet = ["a", "b", "c", "d"];
alpabet.forEach((element) => console.log(element));
// 42.
const arr42 = [10, 20, 30, 40];
// const objempty = {};
const objects = arr42.map((element, index) => {
  return { index, element };
});
// console.log(objects);
// 43.
const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink"];
const filteredColors = colors.filter((element) => element.includes("p"));
// console.log(filteredColors);
// 44.
// //////////////////////////хз///////////////////////////////////////////////////
const alp = ["a", "b", "c", "d", "a", "c", "c"];
const reducedAlp = alp.reduce((acc, str) => {
  acc[str] = (acc[str] || 0) + 1;
  return acc;
}, {});
// console.log(reducedAlp);
/////////////////////////////////////////////////////////////////////////////

// 45.
const js = ["mama", "papa", "zina"];
const isTrue = js.some((element) => element.includes("u"));
// console.log(isTrue);

// 46.
const ever = [2, 4, 6, 8];
const isFalse = ever.every((element) => element % 2 === 0);
// console.log(isFalse);
// 47.
const active = [
  { id: 1, status: "inactive" },
  { id: 3, status: "inactive" },
  { id: 2, status: "active" },
  { id: 4, status: "active" },
];
const activ = active.find((obj) => obj.status === "active");
// console.log(activ);
// 48.
const nums = [3, 7, -2, 9, -5];
const numIndex = nums.findIndex((el) => el < 0);
// console.log(numIndex);//
// 49.
const lang = ["JavaScript", "Python", "Ruby", "Java"];
const landgSorted = lang.sort((a, b) => a.length - b.length);
// console.log(landgSorted);
// 51.
const string = ["h", "e", "l", "l", "o"];
let stri = "";
string.forEach((el) => {
  return (stri += el);
});
// console.log(stri);
// 52.
const beforeMap = [1, 2, 3, 4, 5];
const map = beforeMap.map((element) => element + 10);
// console.log(map);
// 53.
const beforeFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filter = beforeFilter.filter((el) => el % 3 === 0);
// console.log(filter);
// 54.
const short = ["short", "medium", "longest", "longer"];
const long = short.reduce((acc, str) => {
  return str.length > acc.length ? str : acc;
}, "");
// console.log(long);
// 56.
const nana = ["Apple", "Ap", "Apange"];
const isNana = nana.every((element) => element.slice(0, 2) === "Ap");
// console.log(isNana);
// 59.
const baba = [
  { name: "nana", age: 25 },
  { name: "naba", age: 30 },
  { name: "aapa", age: 20 },
];
baba.sort((a, b) => a.name.localeCompare(b.name));
// console.log(baba);
// 61.
const hello = "hello";
const ma = hello.split("");
// const pa = ma.forEach((el) => console.log(el));
// 62.
const pam = lang.map((el) => el[0]);
// console.log(pam);
// 63.
const newNana = nana.filter((el) => el.length >= 3);
// console.log(newNana);
// 64.
// /////////////////REDUCE/////////////////////////////////////////
const acc = short.reduce((acc, word) => {
  return acc + word.length;
}, 0);
// console.log(acc);
// /////////////////////////////////////////////////////////////////
// 65.
const java = ["Hello", "World", "JavaScript"];
const isSome = java.some((el) => el.length > 10);
// console.log(isSome);
// 69.
const nem = ["aaa", "bb", "c"];
const men = nem.sort((a, b) => a.length - b.length);
// console.log(men);
// 70.
const lala = [1, [2, [3, [4]]]];
const lalaF = lala.flat(3);
// console.log(lalaF);

// 72.
const cc = ["a", "b", "c"];
const gg = cc.map((el) => el.repeat(2));
// console.log(gg);
// 73.
// ////////////////////////////////////////////////////////////////
const oneObj = [{ a: 1 }, { b: 2 }, { c: 3 }];
const ob = oneObj.reduce((acc, value) => {
  return { ...acc, ...obj };
}, {});
// /////////////////////////////////////////////////////////////////
// 74.
const y = [{ x: 1 }, { y: 2 }, { z: 3 }];
const ySome = y.some((obj) => obj.y);
// console.log(ySome);
// 76.
const x = ["1a", "2b", "3c"];

const isEvery = x.every((el) => /[A-Za-z]/.test(el) && /\d/.test(el));
// console.log(isEvery);
// 81.
const kar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newKar = kar.filter((num) => num % 2 === 0).map((el) => el ** 2);
// console.log(newKar);
// /////////////////////////////////////////////////////////////////
// 82.
const da = [
  { name: "sa", age: 25 },
  { name: "la", age: 30 },
  { name: "ba", age: 25 },
];
const summ = da.reduce((acc, cur) => {}, {});
console.log(summ);
// ////////////////////////////////////////////////////////////////
// 83.
