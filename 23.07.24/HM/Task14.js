// String and Number Conversion:
let name = "Sasha";
let age = 13;
function convertToUpperCaseAndAddAge(name, age) {
  let newName = name.toUpperCase();
  let stringAge = age.toString();
  let final = newName + stringAge;
  return final;
}
console.log(convertToUpperCaseAndAddAge(name, age));
