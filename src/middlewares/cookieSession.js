function cookieSession (req, res, next) {
    if(req.cookies.userArtisticaDali){ 
        req.session.user = req.cookies.userArtisticaDali;  
        res.locals.user = req.session.user
    } 
    next()
}

module.exports = cookieSession