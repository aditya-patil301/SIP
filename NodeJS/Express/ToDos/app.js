const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

// app.get('/addTask', (req, res) => {
//     res.send(`Task added: ${req.query.task}`);
// });

// app.post('/addTask', (req, res) => {
//     res.send(`Task added: ${req.body.task}`);
// });

// app.post('/addtask', (req, res) => {
//     let {task} = req.body;
//     console.log(task);
// });

let todos = [];

app.get('/addtask', (req, res) => {
    let {work} = req.query;
    todos.push(work);
    // res.redirect('/todos');
    res.send(todos);
});

app.get('/todos', (req, res) => {
    res.send(todos);
});

app.get('/increase', (req, res) => {
    let { work }= req.query;
    let idx = todos.indexOf(work);
    if(idx > 0 && idx < todos.length){
        let temp = todos[idx];
        todos[idx] = todos[idx - 1];
        todos[idx - 1] = temp;
    }
    res.send(todos);
});

app.get('/decrease', (req, res) => {
    let {work} = req.query;
    console.log(work);
    let idx = todos.indexOf(work);
    console.log(idx);
    if(idx < todos.length - 1 && idx >= 0){
        let temp = todos[idx];
        todos[idx] = todos[idx + 1];
        todos[idx + 1] = temp;
    }
    res.send(todos);
});

app.get('/delete', (req, res) => {
    let {work} = req.query;
    console.log(work);
    let idx = todos.indexOf(work);
    console.log(idx);
    todos.splice(idx, 1);
    res.send(todos);
});

app.listen(PORT, (req, res) => {
    console.log("Server is running.");
});