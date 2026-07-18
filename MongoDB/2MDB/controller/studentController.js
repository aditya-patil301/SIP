const mongoose = require("mongoose");
const student = require("../models/studentModel.js");

const registerStudent = async (req, res) => {
    const { name, email, phone, password } = req.body;
    // console.log(name, email, phone, password);
    let newStudent = await student.create({ name, email, phone, password });
    res.redirect("/thanks");
};

const thanksStudent = async(req, res) => {
    res.send("Thanks for registering on our website.")
};

module.exports = {registerStudent, thanksStudent};