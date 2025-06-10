"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const filepath = path_1.default.join(__dirname, "../../db/todo.json");
app.get("/", (req, res) => {
    console.log(req);
    res.send("WELCOME TO TODOS APP");
});
app.get("/todos", (req, res) => {
    const data = fs_1.default.readFileSync(filepath, { encoding: "utf-8" });
    res.json(data);
});
// post route
app.post("/todos/create-todo", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send("todo created");
});
exports.default = app;
