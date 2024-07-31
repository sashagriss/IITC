// let person = {
//   name: "Sasha",
//   age: 21,
//   isStudent: true,
// };
// console.log(`Name -${person.name}, Age - ${person.age}`);

// person.isStudent = false;
// console.log(person.isStudent);

// // creating an object
// // let car = {
// //   make: "mazda",
// //   model: "6",
// //   year: 2008,
// // };
// // logging the model and the make
// console.log(`make:${car}, model ${model}`);
// // updating the car's year
// car.year = 2009;
// // logging the updated car
// console.log(car);

// // creating an object
// let fruit = {
//   name: "kiwi",
//   color: "green",
//   sweetness: 8,
// };
// // logging the name and the sweetness
// console.log(friut.name, fruit.sweetness);
// // updating the color

// fruit.color = "yellow";
// console.log(friut);

// // creating an object
// let book = {
//   title: "Don Kihot",
//   author: "Miguel Servantes",
//   pages: 432,
// };
// console.log(book.author);
// console.log(book.title);

// book.pages = 482;
// console.log(book);

// let animal = {
//   species: "tiger",
//   sound: "RRRR",
//   isWild: true,
// };
// console.log(animal.species);
// console.log(animal.sound);

// animal.isWild = false;

// console.log(animal);

// practice

// 1.
// creating an object
let car = {
  make: "mazda",
  model: "6",
  year: 2008,
  print: function () {
    console.log(this);
  },
};

car.year = 2012;
car.color = "grey";

car.print();
let keys = Object.keys(car);
console.log(keys);

function myCar() {
  for (let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]}: ${car[keys[i]]}`);
  }
}

myCar();

// 6.
let smartphone = {
  brand: "Apple",
  model: "iPhone 12",
  storageGB: 128,
};
console.log(smartphone.storageGB);

smartphone.model = "iPhone 15";
console.log(smartphone.model);

// 7.
let recipe = {
  name: "cake",
  ingredients: ["egg", "flour", "sugar"],
  preparationTime: 80,
};

console.log(recipe.ingredients[0]);
// let newInredient;
// recipe.ingredients = newInredient;
// newInredient.push("milk");

recipe.ingredients.push("milk");
console.log(recipe.ingredients);

// 10.

computer = {
  brand: "lenovo",
  CPU: "idk",
  RAMinGB: 16,
};

console.log(`Brand: ${computer.brand}, CPU: ${computer.CPU}`);
computer.RAMinGB *= 2;
console.log(computer.RAMinGB);
