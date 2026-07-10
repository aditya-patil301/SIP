const express = require ("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get('/submit', (req, res) => {
    const {name, city, email, number} = req.query;
    // res.json({
    //     name: req.query.name,
    //     city: req.query.city,
    //     email: req.query.email,
    //     number: req.query.number
    // });

    res.json({
        name,
        city,
        email,
        number
    });
});

app.listen(PORT, () => {
    console.log('Server is running.')
});
