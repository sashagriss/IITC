// 1
const exs1 = [1, 2, 3, 4, 5];
const arr = [...exs1];
// 2
const exs2 = [...exs1, ...arr];
// 3
const exs3 = [8, ...arr];
// 4
const exs4 = [...arr, 0];
// 5
const exs5 = [...exs1, ...exs2, ...exs4];
// 7
const exs6 = exs1.slice(1);
// 8
const exs8 = exs1.slice(-3);
// 9
const exs9 = [...exs1.reverse()];
// 10
const exs10 = [exs1[0], "baba", ...exs1.slice(2)];

// 1
const string1 = "baba";
const exs11 = [...string1];
// 2
const arr12 = [[1], [2]];
const exs12 = [...arr12[0], ...arr12[1]];
// 3
const exs13 = [...exs3.slice(0, -1)];
// 4
const exs14 = [...exs13.slice(0, 2), "mama", ...exs13.slice(2)];
console.log(exs14);
// 5
const exs = [1, 2, 2, 3, 3, 3, 3, 3];
const exs15 = new Set(exs);
// 6
const middle = Math.floor(exs.length / 2);
const exs16 = [...exs9.slice(0, 2), middle, ...exs9.slice(2)];
console.log(middle);
console.log(exs9);
console.log(exs16);
