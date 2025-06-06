const EventEmitter = require("node:events");

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on("ring", () => {
  console.log("Yahoo!! Class Sesh!!");
});

schoolBell.on("ring", () => {
  console.log("Dhet! R ekta class!");
});

schoolBell.on("broken", () => {
  console.log("Oh No! Class ki sesh hobe nah?");
});

schoolBell.emit("ring");
