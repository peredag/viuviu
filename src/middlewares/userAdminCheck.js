const USER_ROL = "USER_ADMIN";
//const USER_ROL = "USER_ADMIN-x";


function userAdminCheck(req, res, next) {
    if(USER_ROL === "USER_ADMIN"){
        next()
    }else{
        res.redirect('login')
    }
}

module.exports = userAdminCheck