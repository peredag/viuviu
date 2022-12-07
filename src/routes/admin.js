var express = require('express');
var router = express.Router();
let controller = require('../controllers/adminController')

/* GET home page. */
router.get('/', controller.index);

router.get('/edit', controller.products);

module.exports = router;