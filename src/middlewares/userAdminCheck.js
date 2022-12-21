/* const USER_ROL = "USER_ADMIN";
//const USER_ROL = "USER_ADMIN-x";


function userAdminCheck(req, res, next) {
    if(USER_ROL === "USER_ADMIN"){
        next()
    }else{
        res.redirect('login')
    }
}

module.exports = userAdminCheck */

//const USER_ROL = "USER_";  /* USER_ADMIN ---> lo deja pasar a VISTA ADMIN o  USER---> no lo deja pasar al admin  */

function userAdminCheck(req, res, next) {
    if(req.session.user && req.session.user.rol === "USER_ADMIN"){
        next()
    }else{
         /* res.send("raja de aca")/* ----prueba con res.send  */ 
                                        /* si no es USER_ADMIN ---lo manda a la vista login */
         res.redirect('/users/login')
        /* res.status().redirect('/users/login') */
        
    }
} 

module.exports = userAdminCheck