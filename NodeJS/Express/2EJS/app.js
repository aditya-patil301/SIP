const express = require ("express");
const app = express();

const PORT = 3000;

// Request Params
app.get('/student:name', (req, res) => {
    res.json({
        name: req.params.name,
        course: "BCA",
        batch: "2024-2027"
    });
});


// Request Query
app.get('/student', (req, res) => {
    res.json({
        name: req.query.name,
        course: "BCA",
        city: req.query.city,
        batch: "2024-2027"
    });
});

app.listen(PORT, () => {
    console.log('Server is running.')
});
