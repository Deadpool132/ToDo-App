class AuthenticationService{
    registerSuccessfulLogin(username,password){
        sessionStorage.setItem('AuthenticatedUser',username);
    }

    logout(){
        sessionStorage.removeItem('AuthenticatedUser');
    }
    isUserLoggedIn(){
        let user = sessionStorage.getItem('AuthenticatedUser');
        if(user === null) return false
        return true
    }
    getUserLoggedIn(){
        let user = sessionStorage.getItem('AuthenticatedUser');
        if(user === null) return false
        return 'AuthenticatedUser'
    }
}

export default new AuthenticationService();