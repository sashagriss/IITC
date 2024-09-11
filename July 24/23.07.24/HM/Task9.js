// Login Validation:
let username = "Sasha"
let password = "12456"
function validateLogin (username,password) {
let storedUsername = "Sashula";
let storedPassword = "123456";
if (username===storedUsername && password===storedPassword) 
   return "Login successful." ;

else return "Invalid username or password.";

} 
console.log (validateLogin (username,password))