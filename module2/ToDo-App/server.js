const http = require("http");
const path = require("path");
const fs = require("fs");
const { json } = require("stream/consumers");

const filePath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  //   res.end("Welcome to your ToDo App Server");

  // get all todos
  if (req.url === "/todos" && req.method === "GET") {
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  }
  // create todo
  else if (req.url === "/todos/create-todo" && req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data = data + chunk;
    });
    console.log(data);

    req.on("end", () => {
      console.log(data);
      const { userId, id, title, body } = JSON.parse(data);
      const allTodos = fs.writeFileSync(filePath, { encoding: "utf-8" });
      allTodos.push({
        userId,
        id,
        title,
        body,
      });
      fs.writeFileSync(filePath, allTodos, { encoding: "utf-8" });
    });
    // const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
    // res.end(JSON.stringify(allTodos));
  } else {
    res.end("Route Not found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("server is listening to port 5000");
});

// todo -= get all todo
// todo/create create todo
