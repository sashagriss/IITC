// 1.
let age = 20;
let canVote = true
if(age >= 18) { 
   if (canVote)
    console.log("you can vote");
}
// 2.
temp = 10;
if (temp < 0) {
    console.log("It's freezing");
}
else { 
   console.log( "not freezeng");
}

// 4.
let grade = 87;
let letterGrade;
if (grade >= 90) {
letterGrade = "A"
}
else if (grade >= 80) {
 letterGrade = "B"
}
else {
letterGrade = "C"
}
console.log("the grade is" + " " + letterGrade);


// 16.
let dayNumber = 5
let dayName
switch (dayNumber) {
    case 0:
        dayName = "Monday";
        break;
    case 1:
       dayName = "tuesday" ;
       break;
    case 2:
        dayName = "wedendsay" ;
        break;
    case 3:
         dayName = "thursday" ;
         break;
    case 4:
         dayName = "friday"  ;
         break;
    case 5:
         dayName = "sunday"   ; 
         break;      
    case 6:
         dayName = "saturday" ;
         break;
    default:
       dayName =  "invalid day";

}
console.log(`today is ${dayName}`);
