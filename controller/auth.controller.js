function AuthController () {

             function isAuthorized(roles, needRoles) {
                return roles.indexOf(needRoles) >= 0 ;
             }

                function isAuthorizedAsync(roles, needRoles, cb) {    
                    setTimeout(function() {
                        cb(roles.indexOf(needRoles) >= 0, 0 );
                    })          
             }

   return {isAuthorized, isAuthorizedAsync};

}


module.exports = AuthController();