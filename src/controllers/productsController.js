const { products, categories } = require('../database/dataBase')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controller = {

    detail: (req, res) =>{

        let productDetailId = +req.params.id
        let product = products.find(product => product.id === productDetailId)

        // pendiente hacer productos relacionados
        //let relatedProducts = products.filter(element => element.category === product.category) /* PRODUCTOS RELACIONADOS */

        res.render('productDetail', {
            product,
            session: req.session,
           // relatedProducts,
            toThousand
        })
    },
    list: (req, res) =>{
        res.render('productList', {
            products,
            session: req.session,
            toThousand
        })
    },

    category: (req, res) => {
        let categoryId = +req.params.id

        let productsCategory = products.filter(product => +product.category === categoryId)
        //res.send(productsCategory)
        let category = categories.find(category => category.id === categoryId)

        let subcategories = productsCategory.map(product => product.subcategory)

        let uniqueSubcategories = subcategories.filter((x, i, a) => a.indexOf(x) == i)

        res.render('categories', {
            products: productsCategory,
            category, 
            subcategories: uniqueSubcategories,
            session: req.session,
            toThousand
        })


    },
    subcategory: (req, res) => {
        let subcategoryName = req.params.subcategory.toLowerCase()
        let categoryId = +req.params.categoryId 
        
        let productsSubcategories = products.filter(product => product.subcategory.toLowerCase() === subcategoryName)
        let productsCategory = products.filter(product => +product.category === categoryId)
        let category = categories.find(category => category.id === categoryId)
        let subcategories = productsCategory.map(product => product.subcategory)
        
        let uniqueSubcategories = subcategories.filter((x, i, a) => a.indexOf(x) == i) 
 
        res.render('subcategory', {
            products: productsSubcategories,
            category,
            subcategories: uniqueSubcategories,
            session: req.session,
            toThousand
        })
    },
    search: (req, res) => {
        let keywords = req.query.keywords.trim().toLowerCase()

        let result = products.filter(product => product.name.toLowerCase().includes(keywords))
        
        res.render('searchResult', {
            result,
            search: keywords,
            session: req.session,
            toThousand
        })

    }




}

module.exports = controller