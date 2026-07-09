// const aditya = require("express");
// const app = aditya();

const express = require("express");                 // express returns a function
const app = express();
const path = require("path");

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("We are at Home Page.")
});

app.get("/about", (req, res) => {
    res.json({
        name: "Aditya",
        age: 20,
        course: "BCA"
    });
});

// app.get("/about/currentlyStudying", (req, res) => {
//     res.send(`<h1 style="color:red; background-color:gray">Studying MERN at SIP</h1>`);
// });

app.get("/about/currentlyStudying", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.use(express.static(path.join(__dirname, "public")));  // Used to load content of particular folder.
app.get("/motivation", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log('Server is running.');
});

