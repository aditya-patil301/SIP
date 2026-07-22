const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path")
const Cookies = require("cookies");
const keys = ['keyboard cat'];


app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', (req, res) => {
    const { username } = req.body;
    var cookies = new Cookies(req, res, { keys: keys });
    cookies.set('user', JSON.stringify({
        isAdmin: false,
        username
    }))
    res.redirect('/profile');
});


app.get('/login', (req, res) => {
    var cookies = new Cookies(req, res, { keys: keys });
    let data = cookies.get('user');

    if (!data) return res.render('login');
    res.redirect('/profile');
});


app.get('/profile', (req, res) => {
    var cookies = new Cookies(req, res, { keys: keys });
    let data = cookies.get('user');
    if (!data) res.redirect('/login');
    data = JSON.parse(data);

    // Get a cookie
    var lastVisit = cookies.get('LastVisit', { signed: true })

    // Set the cookie to a value
    cookies.set('LastVisit', new Date().toISOString().split('T')[0], { signed: true })
    console.log(lastVisit)
    if (data.isAdmin) return res.redirect('/admin')
    res.render('profile', {
        username: data.username,
        lastVisit
    });
});

app.get('/admin', (req, res) => {
    var cookies = new Cookies(req, res, { keys: keys });
    let data = cookies.get('user');

    if (!data) return res.redirect('/login')
    data = JSON.parse(data);
    if (data.isAdmin) return res.render('admin')
    res.redirect('/profile');
});


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});