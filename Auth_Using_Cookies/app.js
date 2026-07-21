const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'hbs');

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {
    const { username } = req.body;
    console.log(username);
    res.send(`Welcome ${username}`);
});

app.listen(PORT, () => {
    console.log("Server is running.");
});