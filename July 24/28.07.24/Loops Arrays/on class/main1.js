// 6.
function pyramid() {
  let nothing = "";
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j < i; j++) {
      nothing += j;
    }
    nothing += "\n";
  }
  return nothing;
}
// console.log(pyramid());

// 7.
function sum2() {
  let arr = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}
// console.log(sum2());

// 8.
function countLetters() {
  let string = "sasha";
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    obj.string[i] = i;
  }
  return obj;
}
console.log(countLetters());
