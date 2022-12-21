var express = require('express');
var router = express.Router();
let controller = require('../controllers/adminController')
let upload = require('../middlewares/uploadProductFile')

let userAdminCheck = require('../middlewares/userAdminCheck')



router.get('/',userAdminCheck, controller.index);

router.get('/products',userAdminCheck, controller.products);

router.get('/product/create',userAdminCheck, controller.create);

router.post('/product/store', upload.single('image'),controller.store)

router.get('/product/edit/:id',userAdminCheck, controller.edit)

router.put('/product/edit/:id', upload.single('image'),controller.update)

router.delete('/product/delete/:id', controller.destroy)

module.exports = router;