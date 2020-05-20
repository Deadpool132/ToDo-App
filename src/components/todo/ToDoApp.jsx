import React,{Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class ToDoApp extends Component{
    render(){
        return (
            <div>
            <Router>
                <>
                <Switch>
                <Route path="/" exact component={LoginComponent}/>
                <Route path="/login" component={LoginComponent} />
                <Route path="/welcome/:name" component={WelcomeComponent} />
                <Route component={ErrorComponent} />
                </Switch>
                </>
            </Router>
                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        )
    }
}
    
class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                Welcome {this.props.match.params.name}
            </div>
        )
    }
}

function ErrorComponent(){
    return <div>AN error has occured. You are using the wrong URL. Please validate your URL.</div>
}

class LoginComponent extends Component {
constructor(){
    super();
    this.state = {
            username : "in28minutes",
            password : "",
            showSuccessMessage : false,
            hasLoginFailed : false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
}

handleChange(event){
    this.setState(
        {
            [event.target.name] : event.target.value
        }
    )
}

handleValidation(){
    if(this.state.username==='in28minutes' && this.state.password==='dummy'){
        this.props.history.push('/welcome/${this.state.username}')
        // this.setState({
        //     showSuccessMessage:true,
        //     hasLoginFailed:false
        // })
    }
    else
    {
       
    this.setState({
        showSuccessMessage:false,
        hasLoginFailed:true
    })}
}


    render(){
        return (
            <div>
            {/*<ShowInvalidCredentials checkLoginFailed={this.state.hasLoginFailed}/>*/}
            {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
            {this.state.showSuccessMessage && <div>Login Successful</div>}
            {/*<ShowLoginSuccessful hasLoginSuccessful={this.state.showSuccessMessage}/>*/}
                Username : <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br/>
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br/>
                <button onClick={this.handleValidation}>Login</button>
            </div>
        )
    }
}

export default ToDoApp;