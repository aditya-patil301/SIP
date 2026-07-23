const user = require('../models/user');

const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.getHome = (req, res) => {
    res.render('index');
}

module.exports.getLogin = (req, res) => {
    if (req.session.isLoggedIn === true) return res.redirect('/profile')
    res.render('login');
}

module.exports.getSignup = (req, res) => {
    if (req.session.isLoggedIn) {
        return res.redirect("/profile");
    }
    res.render("signup");
}

module.exports.getProfile = (req, res) => {
    if (!req.session.username) return res.redirect('/login');
    res.render('profile', {
        username: req.session.username
    })
}

module.exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        let User = await user.findOne({ username });

        if (!User) return res.render('login', {
            msg: "Invalid User"
        })
        console.log(password, User.password);
        // if (User.password != password) {
        //     return res.render("login", {
        //         msg: "Invalid Password"
        //     });
        // }
        // else {
        //     req.session.username = User.username;
        //     req.session.isLoggedIn = true;
        //     res.redirect("/profile");
        // }

        bcrypt.compare(password, User.password, function (err, result) {
            if (result == true) {
                req.session.username = User.username;
                req.session.isLoggedIn = true;
                res.redirect('/profile');
            }
            else {
                res.render('login', {
                    msg: "Invalid Password try again"
                })
            }
        });
    }
    catch (err) {
        res.send(err);
    }
}

module.exports.postSignup = async (req, res) => {
    const { username, password } = req.body;
    try {
        let User = await user.findOne({ username });
        if (User) return res.render('signup', {
            msg: "Username already taken, choose another name"
        })

        // User = await user.create({
        //     username,
        //     password
        // })
        // res.render('login', {
        //     msg: "Account created Successfully, login to continue"
        // })

        bcrypt.hash(password, saltRounds, async function (err, hash) {

            User = await user.create({
                username,
                password: hash
            })

            res.render('login', {
                msg: "Account created successfully, login to continue"
            })
        });
    }
    catch (err) {
        res.send(err);
    }
}


module.exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });

}