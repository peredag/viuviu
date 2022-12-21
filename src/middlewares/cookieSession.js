function cookieSession (req, res, next) {
   /*  if(req.cookies.userArtisticaDali){  */
    if(req.cookies.userViuViu){    
        /* req.session.user = req.cookies.userArtisticaDali;   */
        req.session.user = req.cookies.userViuViu; 
        res.locals.user = req.session.user
    } 
    next()
}

module.exports = cookieSession