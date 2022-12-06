var express = require('express');
var router = express.Router();

let controller = require('../controllers/usersController')

/* GET home page. */
router.get('/', controller.register);

router.get('/login', controller.login);



module.exports = router;