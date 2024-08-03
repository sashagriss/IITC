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
    // console.log(this);
  },
};

car.year = 2012;
car.color = "grey";

car.print();
let keys = Object.keys(car);
// console.log(keys);

function myCar() {
  for (let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]}: ${car[keys[i]]}`);
  }
}

// myCar();

// 6.
let smartphone = {
  brand: "Apple",
  model: "iPhone 12",
  storageGB: 128,
};
// console.log(smartphone.storageGB);

smartphone.model = "iPhone 15";
// console.log(smartphone.model);

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
// console.log(recipe.ingredients);

// 10.

computer = {
  brand: "lenovo",
  CPU: "idk",
  RAMinGB: 16,
};

console.log(`Brand: ${computer.brand}, CPU: ${computer.CPU}`);
computer.RAMinGB *= 2;
// console.log(computer.RAMinGB);

// 11.
let playlist = {
  name: "Maneskin",
  songs: ["chosen", "Beggin", "Are you ready?"],
  duration: 10,
};
playlist.songs.push("Slave");
playlist.duration += 3;

let averageDuration = playlist.duration / playlist.songs.length;
// console.log(averageDuration);

// 12.
let bankAccount = {
  accountNumber: "Sasha123",
  balance: 15000,
  isActive: true,
  deposit: function (amount) {
    this.balance += amount;
    console.log(`New balance is ${this.balance}`);
  },
  withdraw: function (amount) {
    if (this.balance > amount) {
      this.balance -= amount;
      console.log(`New balance is ${this.balance}`);
    } else {
      console.log(`Account balance is not suficient`);
    }
  },
};
// bankAccount.deposit(1000);

// bankAccount.withdraw(300);

// 13.
let circle = {
  radius: 7,
  color: "pink",
  calculateArea: function () {
    this.area = Math.PI * this.radius ** 2;
    console.log(this.area);
  },
  calculateCircumference: function () {
    this.circumference = 2 * Math.PI * this.radius;
    console.log(this.circumference);
  },
};
// circle.calculateArea();
// circle.calculateCircumference();

// 14.
let student = {
  name: "Sasha",
  grades: [65, 70, 99],
  calculateAverage: function () {
    let sum = this.grades.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    let average = sum / this.grades.length;

    console.log(average);
  },
  getLetterGrade: function () {
    let average = this.calculateAverage();
    if (average >= 90) {
      return "A";
    } else if (average >= 80) {
      return "B";
    } else if (average >= 70) {
      return "C";
    } else if (average >= 60) {
      return "D";
    } else {
      return "F";
    }
  },
};

let letterGrade = student.getLetterGrade();
console.log(letterGrade);

student.calculateAverage();
student.getLetterGrade();

// 15.
let todoList = {
  tasks: ["HM", "dishes", "clean a car"],
  completedTasks: ["laundry", "cook", "clean the house"],
  addTask: function (task) {
    this.tasks.push(task);
    console.log(this.tasks);
  },
  completeTask: function (task) {
    this.completedTasks = this.tasks.filter([0]);
  },
};
todoList.addTask("take kids from school");
todoList.completeTask();????//////?????????????
// ??????????????????????????????????
