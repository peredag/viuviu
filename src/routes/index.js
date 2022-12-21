var express = require('express');
var router = express.Router();
let controller = require('../controllers/indexController')

//let userCheck = require('../middlewares/userCheck')

router.get('/', controller.home);

module.exports = router;
