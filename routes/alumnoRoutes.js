var express = require("express");
var router = express.Router();

var controller = require('../controller/alumnoController');

// GET catalog home page.
router.get('/', controller.home);
router.get('/agregar', controller.agregar);
router.post('/agregar', controller.crear);

module.exports = router;