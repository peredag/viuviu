var express = require('express');
var router = express.Router();
let controller = require('../controllers/usersController');
let loginValidator = require('../validations/loginValidator');
let registerValidator = require('../validations/registerValidator');



router.get('/login', controller.login);

router.post('/login', loginValidator, controller.processLogin);

router.get('/register', controller.register);

router.post('/register', registerValidator, controller.processRegister);

router.get('/logout', controller.logout) 

router.get('/profile', controller.profile)


module.exports = router;