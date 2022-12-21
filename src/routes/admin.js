var express = require('express');
var router = express.Router();
let controller = require('../controllers/adminController')
let upload = require('../middlewares/uploadProductFile')

let userAdminCheck = require('../middlewares/userAdminCheck')



router.get('/', controller.index);

router.get('/products', controller.products);

router.get('/product/create', controller.create);

router.post('/product/store', upload.single('image'),controller.store)

router.get('/product/edit/:id', controller.edit)

router.put('/product/edit/:id', upload.single('image'),controller.update)

router.delete('/product/delete/:id', controller.destroy)

module.exports = router;