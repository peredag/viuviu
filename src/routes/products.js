var express = require('express');
var router = express.Router();

let controller = require('../controllers/productsController')

/* GET home page. */
router.get('/detail', controller.detail);

router.get('/list', controller.list);

module.exports = router;
