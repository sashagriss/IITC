// Nested If Statements:
let age = 20
isMember = false

function checkDiscount (age,isMember) {
    if (age< 18 ) {
    if (isMember===true)
     return "You get 20% discount.";
    
    else return "You get a 10% discount.";
}
else if (age >= 65) {
    if (isMember===true)
        return "You get 30% discount.";
    else return "You get a 20% discount.";
}
else {
    if  (isMember===true)
        return "You get 10% discount.";
    else return "No discount available.";
} }
console.log (checkDiscount(age,isMember))