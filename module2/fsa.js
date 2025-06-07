const fs = require("fs");

// fs.readFile("./hello.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.error("Someting went wrong  ", err);
//   }
//   console.log(data);
// });

fs.writeFile("./hello.txt", "Node js", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("something went wrong");
  }
  console.log(data);
});
