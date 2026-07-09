const express = require("express");                 // express returns a function
const app = express();
const path = require("path");
const PORT = 3000;

// Request Params
app.get("/student:name", (req, res) => {
    res.send(`Just Say My Name: ${req.params.name}`);
});


app.listen(PORT, () => {
    console.log('Server is running.');
});