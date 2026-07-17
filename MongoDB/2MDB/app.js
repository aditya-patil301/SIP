const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const student = require("./models/studentModel.js");
const path = require("path");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.post('/submit', async(req, res) => {
    const{name, email, phone, password} = req.body;
    // console.log(name, email, phone, password);
    let newStudent = await student.create({name, email, phone, password});
    res.redirect("/thanks");
});

app.get('/thanks', (req, res) => {
    res.send("Thanks for registering on our website.")
});


mongoose.connect('mongodb://localhost:27017/sipTest')
    .then(() => {
        console.log("MongoDB connected.")
        app.listen(PORT, () => {
            console.log('Server is running.');
        });
    })
    .catch((err) => {
        console.log(err);
    });

// app.get("/", (req, res) => {
//     res.send('Hello!!');
// });

