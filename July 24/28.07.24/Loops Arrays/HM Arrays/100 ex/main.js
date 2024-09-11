// // 1.
// let fruits = [];
// // 2.
// let num = [1, 2, 3, 4, 5];
// // 3.
// // 4.
// let mixed = [1, true, "sun"];
// // 5.
// let seasons = ["summer", "autumn", "winter", "spring"];
// // 6.
// console.log(num.length);
// // 7.
// let emptyCheck = [];
// if (emptyCheck.length === 0) {
//   console.log(emptyCheck);
// }
// // 8.
// let dynamic = ["a", "b", "c", "d", "e"];
// console.log(dynamic.length);
// // 9.
// dynamic.push("f");
// console.log(dynamic.length);
// // 10.
// dynamic.shift();
// console.log(dynamic.length);
// // 11.
// let colors = ["red", "pink", "yellow"];
// console.log(colors[0]);
// // 12.
// console.log(seasons[seasons.length - 1]);
// // 13.
// midNum = Math.floor(num.length / 2);
// console.log(num[midNum]);
// // 14.
let fruit = ["banana", "apple", "kiwi"];
// console.log(fruit[6]);
// // 15.
// console.log(`The second color is ${colors[1]}.`);
// // 16.
// fruit[0] = "strawberry";
// console.log(fruit);
// // 17.
// fruit[fruit.length - 1] = "raspberry";
// console.log(fruit);
// // 18.
// // num[2] *= 2;
// // console.log(num);
// // 19.
// for (let i = 0; i < colors.length; i++) {
//   colors[i] = colors[i].toUpperCase();
// }
// console.log(colors);
// // 20.
// let temp = seasons[0];
// seasons[0] = seasons[seasons.length - 1];
// seasons[seasons.length - 1] = temp;
// console.log(seasons);

// // 21.
// fruit.push("orange");
// console.log(fruit);

// // 22.
// lastNumber = num.pop();
// console.log(num);
// console.log(lastNumber);

// // 23.
// colors.push("violet", "black", "white");
// console.log(colors);

// // 24.
// // let arr = [];
// // for (let i = 0; i <= 5; i++) {
// //   arr.push(i);
// // }
// // console.log(arr);

// // 25.
// // let arr = [1, 2, 3];
// // let popArr = arr.pop();
// // for (let i = 3; i > 0; i--) {
// //   console.log(arr[i]);
// // }

// // console.log(popArr);

// // 26.
// fruit.unshift("mango");
// console.log(fruit);
// // 27.
// num.shift();
// let removedNum = num.shift();
// console.log(num);
// console.log(removedNum);

// // 28.
// num.unshift(0, 1, 2);
// console.log(num);

// // 29.
// let emptyArr = [];
// for (let i = 5; i > 0; i--) {
//   emptyArr.unshift(i);
// }
// console.log(emptyArr);

// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!?
// // 30.
// while (emptyArr.length > 0) {
//   console.log(emptyArr.shift());
//   console.log(emptyArr);
// }

// // 31.
// let index = colors.indexOf("white");
// console.log(index);

// // 32.
// console.log(seasons.indexOf("winter"));

// // 33.
// colors.push("red");
// let lastIndexOf = colors.lastIndexOf("red");
// console.log(lastIndexOf);
// // 34.
// let numeros = [1, 1, 2, 3, 3];
// let indexOfNumero = numeros.indexOf(1);
// console.log(indexOfNumero);

// let lastIndexOfNumero = numeros.lastIndexOf(3);
// console.log(lastIndexOfNumero);

// // 35.
// if (numeros.indexOf(2) !== -1) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// // 36.
// console.log(fruits.includes("apple"));

// // 38.
// console.log(colors.includes("blue", colors / 2));
// // 39.
// function checkSpecValue(value) {
//   return numeros.includes(value) !== -1;
// }
// console.log(checkSpecValue(1));

// // 41.
// console.log(numeros.slice(3));

// // 42.
// console.log(colors.slice(5));

// // 43.
// console.log(seasons.slice(1, 3));
// // 44.
// console.log(colors.slice());
// // 45.
// if (numeros % 2 === 0) {
//   let startNumeros = Math.floor(numeros.length / 2) - 1;
//   let endfNumeros = Math.ceil(numeros.length / 2) + 1;
//   console.log(numeros.slice(halfNumeros, endfNumeros));
// } else {
//   let halfNumeros = Math.floor(numeros.length / 2);
//   console.log(numeros.slice(halfNumeros, halfNumeros + 1));
// }
// // 46.
// console.log(colors);
// console.log(colors.splice(colors.length / 2, 1));

// // 47.
// console.log(numeros);
// numeros.splice(3, 1, 5);
// // console.log(numeros);

// // 48.
// console.log(colors);
// colors.splice(1, 0, "green");
// // console.log(colors);

// // 49.
// colors.splice(0, 1, "blue", "orange");
// // console.log(colors);

// // 50.
// // colors.splice(0, colors.length);
// // console.log(colors);

// // 51.
// let newArr = colors.concat(fruit);
// // console.log(newArr);

// // 52.
// let newArray = colors.concat(fruit.concat(numeros));
// // console.log(newArray);

// //  53.
// let newArr1 = colors.concat(fruit, "blueberry");
// // console.log(newArr1);

// // 54.
// let newArr2 = colors.concat(colors);
// // console.log(newArr2);

// // 55.
// let newArr3 = colors.concat(fruit, 1, 2, 3);
// console.log(newArr3);

// // 56.
// let newFruit = fruit.join(",");
// // console.log(newFruit);

// // 57.
// // newNum = numeros.join("-");
// // console.log(newNum);

// // 58.
// function join(array, seperator) {
//   return array.join(seperator);
// }
// // console.log(join(numeros, "/"));

// // 59.
// // console.log(numeros.join(""));

// // 60.
// // let str = "I am a mother";
// function reverse(str) {
//   let split = str.split(" ");
//   let reverse = split.reverse();
//   let join1 = reverse.join(" ");
//   return join1;
// }
// // console.log(reverse("I am a mother"));

// // 61.
// // console.log(seasons);
// // console.log(seasons.reverse());

// // 62.
// function checkPalindrome(word) {
//   let halfWord = word.split("").reverse().join("");
//   return halfWord;
// }
// // console.log(checkPalindrome("alla"));

// // 63.
// let Number1 = [1, 2, 3, 4, 5];
// let revNum1 = Number1.reverse();
// let afterMap = revNum1.map((n) => {
//   return n ** 2;
// });

// // console.log(afterMap);
// // 64.
// let sasha = "sasha";
// let reverseSasha = sasha.split("").reverse().join("");
// // console.log(reverseSasha);

// // 65.
// let sashka = ["s", "a", "s", "h", "k", "a"];
// let empty = [];
// for (let i = 0; i < sashka.length; i++) {
//   empty.unshift(sashka[i]);
// }
// // console.log(empty);

// 66.
console.log(fruit);
let sortedFruit = fruit.sort();
console.log(sortedFruit);

// 67.
