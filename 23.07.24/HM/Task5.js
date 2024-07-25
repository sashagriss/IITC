// JS Switch Statement
getDayMessage("Monday")
getDayMessage("Tuesday")
getDayMessage("Wednesday")
getDayMessage("Thursday")
getDayMessage("Friday")
getDayMessage ("Sunday")


function getDayMessage(dayOfWeek) {
switch (dayOfWeek) {
 case "Monday":
 console.log ("Start of the work week!");
 break;
 case "Tuesday":
 console.log ("Second day of the work week!");
 break;
 case "Wednesday":
 console.log ("Midweek!");
 break;
 case "Thursday":
 console.log ("Almost there!");
 break;
 case "Friday":
console.log ("Last day of the work week!")
break; 
default :
 console.log ("Invalid day!")
    } }