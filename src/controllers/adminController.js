let controller = {
    index: (req, res) =>{
        res.render('admin/adminProductCreate', {
            
        })
    },
    products: (req, res) =>{
        res.render('admin/adminEditForm', {
            
        })
    }

}

module.exports = controller