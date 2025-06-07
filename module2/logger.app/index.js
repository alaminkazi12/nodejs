const path = require("path");
const fs = require("fs");

const inputArguments = process.argv.slice(2);
const timestamp = new Date().toISOString();
const text = inputArguments.join(" ");
const message = `${text} ${timestamp} \n`;

if (!message) {
  console.log("❌ please provide the message");
  console.log("Example: node index.js Hello World!");
  process.exit(1);
}

const filePath = path.join(__dirname, "log.txt");

fs.appendFile(filePath, message, { encoding: "utf-8" }, () => {
  console.log("Log added successfully");
});

console.log(inputArguments);
console.log(timestamp);
console.log(message);
console.log(filePath);
