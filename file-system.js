const fs = require("fs");

// create welcome.txt with one line
fs.writeFileSync("welcome.txt", "Hello Node\n");

// read the file and print its content
const data = fs.readFileSync("welcome.txt", "utf8");
console.log(data);
