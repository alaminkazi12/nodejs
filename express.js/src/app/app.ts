import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const app: Application = express();

app.use(express.json());

const filepath = path.join(__dirname, "../../db/todo.json");

app.get("/", (req: Request, res: Response) => {
  console.log(req);
  res.send("WELCOME TO TODOS APP");
});

app.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filepath, { encoding: "utf-8" });
  res.json(data);
});

// post route
app.post("/todos/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send("todo created");
});

export default app;
