// String Comparison and Manipulation:
let name = "      Sasha         "
function formatName(name) {
    console.log (name.trim());
    console.log (name.toLowerCase());
   let newName = name.toLowerCase().trim()
 
    if (newName=== "admin"){
        console.log ("Welcome,Admin!")
    }
    else {console.log (`Hello, ${newName}!`)
    }
} 
formatName(name)

