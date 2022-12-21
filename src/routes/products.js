var express = require('express');
var router = express.Router();

let controller = require('../controllers/productsController')


router.get('/detail/:id', controller.detail);

router.get('/list', controller.list);

router.get('/category/:id', controller.category);

router.get('/subcategory/:subcategory/:categoryId', controller.subcategory);

router.get('/search', controller.search);

module.exports = router;
