class AuthenticationService{
    registerSuccessfulLogin(username,password){
        sessionStorage.setItem('AuthenticatedUser',username);
    }

    logout(){
        sessionStorage.removeItem('AuthenticatedUser');
    }
}

export default new AuthenticationService();