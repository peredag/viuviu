const { products } = require('../database/dataBase')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controller = {

    detail: (req, res) =>{

        let productDetailId = +req.params.id;

        let product = products.find(product => product.id === productDetailId)

        res.render('productDetail', {
            product,
            toThousand
        })
    },
    list: (req, res) =>{
        res.render('productList', {
            products,
            toThousand
        })
    },
    category: (req, res) => {

    }


}

module.exports = controller