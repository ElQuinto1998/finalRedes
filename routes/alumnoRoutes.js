var express = require("express");
var router = express.Router();

var controller = require('../controller/alumnoController');

// GET catalog home page.
router.get('/', controller.home);

module.exports = router;