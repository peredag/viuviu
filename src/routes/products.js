var express = require('express');
var router = express.Router();

let controller = require('../controllers/productsController')

/* GET home page. */
router.get('/detail/:id', controller.detail);

router.get('/list', controller.list);

router.get('/category/:id', controller.category);



module.exports = router;
