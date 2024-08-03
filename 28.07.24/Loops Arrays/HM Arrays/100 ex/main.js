// 1.
let fruits = [];
// 2.
let num = [1, 2, 3, 4, 5];
// 3.
// 4.
let mixed = [1, true, "sun"];
// 5.
let seasons = ["summer", "autumn", "winter", "spring"];
// 6.
console.log(num.length);
// 7.
let emptyCheck = [];
if (emptyCheck.length === 0) {
  console.log(emptyCheck);
}
// 8.
let dynamic = ["a", "b", "c", "d", "e"];
console.log(dynamic.length);
// 9.
dynamic.push("f");
console.log(dynamic.length);
// 10.
dynamic.shift();
console.log(dynamic.length);
// 11.
let colors = ["red", "pink", "yellow"];
console.log(colors[0]);
// 12.
console.log(seasons[seasons.length - 1]);
// 13.
midNum = Math.floor(num.length / 2);
console.log(num[midNum]);
// 14.
let fruit = ["apple", "banana", "kiwi"];
console.log(fruit[6]);
// 15.
console.log(`The second color is ${colors[1]}.`);
// 16.
fruit[0] = "strawberry";
console.log(fruit);
// 17.
fruit[fruit.length - 1] = "raspberry";
console.log(fruit);
// 18.
// num[2] *= 2;
// console.log(num);
// 19.
for (let i = 0; i < colors.length; i++) {
  colors[i] = colors[i].toUpperCase();
}
console.log(colors);
// 20.
let temp = seasons[0];
seasons[0] = seasons[seasons.length - 1];
seasons[seasons.length - 1] = temp;
console.log(seasons);

// 21.
fruit.push("orange");
console.log(fruit);

// 22.
lastNumber = num.pop();
console.log(num);
console.log(lastNumber);

// 23.
colors.push("violet", "black", "white");
console.log(colors);

// 24.
// let arr = [];
// for (let i = 0; i <= 5; i++) {
//   arr.push(i);
// }
// console.log(arr);

// 25.
// let arr = [1, 2, 3];
// let popArr = arr.pop();
// for (let i = 3; i > 0; i--) {
//   console.log(arr[i]);
// }

// console.log(popArr);

// 26.
fruit.unshift("mango");
console.log(fruit);
// 27.
num.shift();
let removedNum = num.shift();
console.log(num);
console.log(removedNum);

// 28.
num.unshift(0, 1, 2);
console.log(num);

// 29.
let emptyArr = [];
for (let i = 5; i > 0; i--) {
  emptyArr.unshift(i);
}
console.log(emptyArr);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!?
// 30.
for (let i = 0; i < emptyArr.length; i++) {
  let shiftArr = emptyArr.shift();
  console.log(shiftArr);
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// 31.
let index = colors.indexOf("white");
console.log(index);

// 32.
console.log(seasons.indexOf("winter"));

// 33.
colors.push("red");
let lastIndexOf = colors.lastIndexOf("red");
console.log(lastIndexOf);
// 34.
let numeros = [1, 1, 2, 3, 3];
let indexOfNumero = numeros.indexOf(1);
console.log(indexOfNumero);

let lastIndexOfNumero = numeros.lastIndexOf(3);
console.log(lastIndexOfNumero);
