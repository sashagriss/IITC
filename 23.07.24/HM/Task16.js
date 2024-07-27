// Check Substring:

let mainSentence = "Hello, world";
//let searchWord = "world";
let searchWord = "World";

function containsSubstring(mainString,subString) {
    return mainString.indexOf(subString) > -1;
}

console.log( containsSubstring(mainSentence, searchWord) );