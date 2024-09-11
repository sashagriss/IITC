// Complex Boolean Conditions:
let age = 21
let isCitizen = false
function canVote (age,isCitizen){
if (age > 18 || isCitizen ===true) {
    return "You are eligible to vote."
}
else {  return "You are not eligible to vote."
}
}
console.log (canVote (age,isCitizen))