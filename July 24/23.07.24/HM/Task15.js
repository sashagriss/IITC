// Capitalize First Letter:
let word = "apple";
function capitalize(word) {
    let capWord = word.charAt(0).toUpperCase();
    let final = word.substring(1);
    let theCap = capWord + final;
    return theCap;       
}
console.log (capitalize(word)); 