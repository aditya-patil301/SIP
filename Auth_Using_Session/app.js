const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs");
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config(); 

const connectDB = require("./config/db");
connectDB();

const user = require("./models/user");

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.use(session({
//     secret: 'lkjshdkj',
//     resave: false,
//     saveUninitialized: true,
//     store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/authentication' })
// }))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

    // store: MongoStore.create({
    //     mongoUrl: process.env.MONGO_URI,
    //     collectionName: "sessions"
    // }),

    cookie: {
        maxAge: 1000 * 60 * 60 // 1 hour
    }
}));

const userRoutes = require("./routes/userRoutes.js")
app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})