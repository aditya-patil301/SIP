let todos = [];

const addTask = (req, res) => {
    let {work} = req.body;
    if(work.length != ""){
        todos.push(work);
    }
    // res.redirect('/todos');
    res.send(todos);
};

const getTask = (req, res) => {
    res.send(todos);
};

const increaseTask = (req, res) => {
    let { work }= req.body;
    let idx = todos.indexOf(work);
    if(idx > 0 && idx < todos.length){
        let temp = todos[idx];
        todos[idx] = todos[idx - 1];
        todos[idx - 1] = temp;
    }
    res.send(todos);
};

const decreaseTask = (req, res) => {
    let {work} = req.body;
    console.log(work);
    let idx = todos.indexOf(work);
    console.log(idx);
    if(idx < todos.length - 1 && idx >= 0){
        let temp = todos[idx];
        todos[idx] = todos[idx + 1];
        todos[idx + 1] = temp;
    }
    res.send(todos);
};

const deleteTask = (req, res) => {
    let {work} = req.body;
    console.log(work);
    let idx = todos.indexOf(work);
    console.log(idx);
    todos.splice(idx, 1);
    res.send(todos);
};

module.exports = {getTask, addTask, increaseTask, decreaseTask, deleteTask};