// read stream

const fs = require("fs");

const readStrem = fs.createReadStream("./hello.txt", { encoding: "utf-8" });
const writeStrem = fs.createWriteStream("./vallo.txt", { encoding: "utf-8" });

readStrem.on("data", (data) => {
  console.log(data);
  writeStrem.write(data, (err) => {
    if (err) {
      throw Error("Error:", err);
    }
  });
});

readStrem.on("error", (err) => {
  if (err) {
    throw Error("Error:", err);
  }
});

readStrem.on("end", () => {
  console.log("Reading ended");
  writeStrem.end();
});

writeStrem.on("finish", () => {
  console.log("written successfully");
});
