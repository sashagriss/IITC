
// JS FUNCTIONS:
let firstName = "Sasha";
let lastName = "Hryshchuk";
function greet(firstName,lastName) {
    let fullName = `${firstName} ${lastName}`
    console.log(fullName);
    let result = (`Hello , ${fullName}!  Welcome to the IITC Bootcamp.`)
    return result;
}
    console.log(greet(firstName,lastName));
    