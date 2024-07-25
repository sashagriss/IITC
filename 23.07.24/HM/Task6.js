// Complex conditions:
let age = 20;
let isStudent = true;
function checkEligibility(age,isStudent) {
    if (age< 18 && isStudent===true) {
        console.log ("You are a minor student.");
    }
     else if (age<18 && isStudent===false) {
        console.log ("You are a minor non-student.");
    }
    else if (age>18 && age <24 && isStudent===true) {
        console.log("You are a young adult student.");
    }
    else if (age>18 && age <24 && isStudent!==true) {
        console.log("You are a young adult non-student.");
    }
    else if (age>=25 && isStudent===true) {
        console.log("You are a adult student.");
    }
    else {console.log ("You are a adult non-student.");
} }
checkEligibility(age, isStudent);