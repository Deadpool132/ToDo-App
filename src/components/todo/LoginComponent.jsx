import React,{Component} from "react";
import AuthenticationService from "./AuthenticationService.js"


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
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push('/welcome/Vinay')
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
                <h1>Login</h1>
                <div className="container">
                {/*<ShowInvalidCredentials checkLoginFailed={this.state.hasLoginFailed}/>*/}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                {/*<ShowLoginSuccessful hasLoginSuccessful={this.state.showSuccessMessage}/>*/}
                    Username : <input type="text" style={{marginBottom : "10px"}} name="username" value={this.state.username} onChange={this.handleChange} /><br/>
                    Password : <input type="password" style={{marginBottom : "10px"}} name="password" value={this.state.password} onChange={this.handleChange}/><br/>
                    <button className="btn btn-success"onClick={this.handleValidation}>Login</button>
                    </div>
                </div>
            )
        }
    }

    export default LoginComponent;