const express = require("express");
const router = express.Router();

const {registerStudent, thanksStudent} = require("../controller/studentController.js");

router.post('/submit', registerStudent);
router.get('/thanks', thanksStudent);

module.exports = router;