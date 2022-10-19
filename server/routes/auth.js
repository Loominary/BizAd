var express = require('express');
var router = express.Router();

const ac = require('../controllers/auth');

router.post  ('/login', ac.login);
router.post  ('/register', ac.registerUser);

module.exports = router;