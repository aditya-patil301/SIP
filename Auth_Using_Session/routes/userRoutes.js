const express = require("express");
const router = express.Router();
const path = require('path');

const userControllers = require("../controllers/userController.js")

router.get('/', userControllers.getHome);
router.get('/login', userControllers.getLogin);
router.get('/signup', userControllers.getSignup);
router.get('/profile', userControllers.getProfile);
router.post('/login', userControllers.postLogin);
router.post('/signup', userControllers.postSignup);
router.get("/logout", userControllers.logout);

module.exports = router;