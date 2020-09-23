const express = require("express")
,     router = express.Router()
,     authController = require('../controllers/auth.controller.js');

router.post('/register', authController.postAuthRegister);

module.exports = router;
