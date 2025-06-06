// synchoronous
// single thread > I/o intensive
// asynchoronous
const fs = require("fs");

console.log("Task - 1");

const text = "Learning File Syestem";

fs.writeFileSync("./hello.txt", text);

const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });

console.log("Task -3");

console.log(data);
