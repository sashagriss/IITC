// 1.
let age = 20;
let canVote = true;
if (age >= 18) {
  if (canVote) console.log("you can vote");
}
// 2.
temp = 10;
if (temp < 0) {
  console.log("It's freezing");
} else {
  console.log("not freezeng");
}

// 4.
let grade = 87;
let letterGrade;
if (grade >= 90) {
  letterGrade = "A";
} else if (grade >= 80) {
  letterGrade = "B";
} else {
  letterGrade = "C";
}
console.log("the grade is" + " " + letterGrade);

// // 6.
let year = 365;
let isLeapYear;
if (year % 4 === 0) {
  isLeapYear = true;
} else {
  isLeapYear = false;
}
console.log(isLeapYear);

// 8.
let hour = 16;
let period;
if (hour < 12) {
  period = "AM";
} else {
  period = "PM";
}
console.log(period);

// 11.
let password = "1234";
let isLoggedIn;
if (password === "secret123") {
  isLoggedIn = true;
} else {
  isLoggedIn = false;
}
console.log(isLoggedIn);

// 13.
let income = 4321;
let creditScore = 800;
let loanAprroved;
if (income > 5000 && creditScore > 700) {
  loanAprroved = true;
} else {
  loanAprroved = false;
}
console.log(loanAprroved);

// 19.
let yearNow = 2000;
let isCenturyLeapYear;
if (yearNow % 100 === 0 && yearNow % 400 === 0) {
  isCenturyLeapYear = true;
} else {
  isCenturyLeapYear = false;
}
console.log(isCenturyLeapYear);
// 16.
let dayNumber = 5;
let dayName;
switch (dayNumber) {
  case 0:
    dayName = "Monday";
    break;
  case 1:
    dayName = "tuesday";
    break;
  case 2:
    dayName = "wedendsay";
    break;
  case 3:
    dayName = "thursday";
    break;
  case 4:
    dayName = "friday";
    break;
  case 5:
    dayName = "sunday";
    break;
  case 6:
    dayName = "saturday";
    break;
  default:
    dayName = "invalid day";
}
console.log(`today is ${dayName}`);

// 18.
let positiveNumber;

let nowNumber = 7;
let parity = nowNumber % 2 === 0 ? "even" : "odd";
console.log(parity);
