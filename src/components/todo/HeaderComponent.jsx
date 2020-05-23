import React,{Component} from "react";
import {Link} from "react-router-dom"
import AuthenticationService from "./AuthenticationService.js"
import { withRouter } from 'react-router';

class HeaderComponent extends Component {
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div ><a className="navbar-brand" href="https://deadpool132.github.io/vgarg.github.io/">Vinay Garg</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li ><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                        {isUserLoggedIn &&<li ><Link className="nav-link" to="/todos">ToDos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end" >
                        {!isUserLoggedIn &&<li ><Link className="nav-link" to="/login">Login</Link></li>}
                        {/* {isUserLoggedIn && <li ><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>} */}
                        {isUserLoggedIn && <li ><a style={{color: "#fff", textDecorationLine: "none"}} href="/logout" onClick={AuthenticationService.logout}>Logout</a></li>}
                    </ul>

                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);