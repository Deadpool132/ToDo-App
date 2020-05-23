import React,{Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./todo.css"
import AuthenticatedRoute from "./AuthenticatedRoute.jsx"
import LoginComponent from "./LoginComponent.jsx"
import ToDosComponent from "./ToDosComponent"
import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent"
import LogoutComponent from "./LogoutComponent"
import WelcomeComponent from "./WelcomeComponent"
import ErrorComponent from "./ErrorComponent"
import UpdateToDoComponent from "./UpdateToDoComponent"

class ToDoApp extends Component{
    render(){
        return (
            <div>
            <Router>                
                <>
                <HeaderComponent/>
                <Switch>
                <Route path="/" exact component={LoginComponent}/>
                <Route path="/login" component={LoginComponent} />
                <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                <AuthenticatedRoute path="/todos/:id" component={UpdateToDoComponent} />
                <AuthenticatedRoute path="/todos" component={ToDosComponent}/>
                <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                <Route component={ErrorComponent} />
                </Switch>
                <FooterComponent/>
                </>
            </Router>
                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        )
    }
}

export default ToDoApp;