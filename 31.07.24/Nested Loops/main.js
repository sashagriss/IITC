// 1.
function stars() {
  for (let i = 0; i < 3; i++) {
    str = "";
    for (let j = 0; j < 3; j++) {
      str += "* ";
    }
    console.log(str);
  }
}
// stars();

// 2.
function grid() {
  let str = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      str += j + " ";
    }
    console.log(str);
  }
}
grid();
