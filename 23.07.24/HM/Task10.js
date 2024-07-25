// Substring Extraction:
let firstName = "sasha"
let lastName = "hryshchuk"
function extractInitials(firstName,lastName) {
let fInituals = firstName.charAt(0)
let lInitials = lastName.charAt(0)
let fullInitials = fInituals + "." + lInitials + ".";
return fullInitials.toUpperCase ();
}
console.log (extractInitials(firstName,lastName))