let { products} = require('../database/dataBase')

let fs = require('fs')

let controller = {
    index: (req, res) =>{
        res.render('admin/adminIndex', {
        })
    },
    products: (req, res) => {
        //res.send(products)
        res.render('admin/products/adminProducts', {
            products
        })
    }

}

module.exports = controller