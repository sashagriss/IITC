const { log } = require("console");
const fs = require("fs");

// fs.readFile("hello.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log(data);
// });

// fs.writeFile("my-file.txt", "BABA", (err) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log("Success");
// });

// fs.appendFile("my-file.txt", "\nnew line", (err) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log("Daaaa");
// });

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file", err);
    return;
  }
  console.log(data);

  fs.writeFile("output.txt", data, "utf8", (err) => {
    if (err) {
      console.error("Error creating a file", err);
      return;
    }
    console.log("File created");
    fs.appendFile("output.txt", "\n Great", (err) => {
      if (err) {
        console.error("Error", err);
      }
      console.log("operation is done");
    });
  });
});
