// // 1.
// // creating a function
// function printStars() {
//   let str = "";
//   // creating a main loop that will be responsible for column
//   for (let i = 0; i < 2; i++) {
//     // creating an empty String
//     for (let j = 0; j < 2; j++) {
//       str += "* ";
//     }
//     str += "\n";
//   }
//   console.log(str);
// }
// // printStars();

// // 2.
// function printNum(g) {
//   let count = 1;
//   let str = "";
//   for (let i = 0; i < g; i++) {
//     for (let j = 0; j < g; j++) {
//       str += count + " ";
//       count++;
//     }
//     str = "\n";
//   }
//   console.log(str);
// }
// // printNum(2);

// // 3.
// function printTriangle() {
//   for (let i = 0; i < 3; i++) {
//     str = "";
//     for (let j = 0; j <= i; j++) {
//       str += "*";
//     }
//     console.log(str);
//   }
// }

// // printTriangle();

// // 4.

// function printSum(g) {
//   for (let i = 0; i < g; i++) {
//     str = "";
//     for (let j = 0; j < g; j++) {
//       str += i + j;
//     }
//     console.log(str);
//   }
// }
// printSum(3);

// // 5

// print6(3);

// function print(g) {
//      for (let i = 1; i <= g; i++) {
//     str = "";
//     for (let j = 1; j <= g; j++) {
//       str += i * j + " ";
//     }
//     console.log(str);
//   }
// }

// print(2);

//
// Otra vez 1-5
// 1.
function printAsteriks(g) {
  for (let i = 0; i < g; i++) {
    let str = "";
    for (let j = 0; j < g; j++) {
      str += "* ";
    }

    console.log(str);
  }
}
// printAsteriks(2);

// 2.
function printNumber(k) {
  let count = 1;
  for (let i = 0; i < k; i++) {
    let row = "";
    for (let j = 0; j < k; j++) {
      row += count + " ";
      count++;
    }
    console.log(row);
  }
}
// printNumber(2);

// 3.
function triangle() {
  for (let i = 0; i < 3; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
}
// triangle();

// 4.
function sum(l) {
  for (let i = 0; i < l; i++) {
    let str = "";
    for (let j = 0; j < l; j++) {
      str += `${i + j} `;
    }
    console.log(str);
  }
}
// sum(3);

// 5.
function multiplication(h) {
  for (let i = 1; i <= h; i++) {
    let str = "";
    for (let j = 1; j <= h; j++) {
      str += `${j * i} `;
    }
    console.log(str);
  }
}
// multiplication(3);

// 6.
function square() {
  let str = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (i === 0 || i === 4 || j === 0 || j === 4) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  console.log(str);
}
// square();

// 7.
function count(d) {
  let count = 1;
  for (let i = 0; i < d; i++) {
    let row = "";
    for (let j = 0; j < d; j++) {
      row += count + " ";
      count++;
    }
    console.log(row);
  }
}
// count(3);

function countEven(e) {
  let count = 2;
  for (let i = 0; i < e; i++) {
    let row = "";
    for (let j = 0; j < e; j++) {
      row += count + " ";
      count += 2;
    }
    console.log(row);
  }
}
countEven(3);
