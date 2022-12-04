var express = require('express');
var router = express.Router();

let controller = require('../controllers/productsController')

/* GET home page. */
router.get('/detail', controller.detail);

module.exports = router;
