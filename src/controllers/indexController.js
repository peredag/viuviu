const { products } = require('../database/dataBase')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controller = {
    home: (req, res) =>{

      //  let productsInSale = products.filter(x => x.discount == 5)
        let productsInSale = products.filter(x => x.discount <= 5)

       // let productsNews = 

        res.render('home', {
             products, 
             productsInSale,
          //   productsNews;
             session: req.session,
             toThousand
    
        })
    }

}

module.exports = controller