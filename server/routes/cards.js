var express = require('express');
var router = express.Router();

const cc = require('../controllers/cards');

router.get  ('/', cc.getAllCards);

module.exports = router;