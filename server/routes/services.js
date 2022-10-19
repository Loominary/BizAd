var express = require('express');
var router = express.Router();

const sc = require('../controllers/services');

router.get  ('/', sc.getAllServices);
router.get  ('/:service_id', sc.findService)
//router.post     ('/', sc.addUser);
router.delete   ('/', sc.deleteService)
router.patch('/:id', sc.updateService);

module.exports = router;