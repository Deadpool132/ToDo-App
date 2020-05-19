import React,{Component} from "react";

class ToDoApp extends Component{
    render(){
        return (
            <div>
                <LoginComponent />
            </div>
        )
    }
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
    if(this.state.username==='in28minutes' && this.state.password==='dummy')
        this.setState({
            showSuccessMessage:true,
            hasLoginFailed:false
        })
    else
       
    this.setState({
        showSuccessMessage:false,
        hasLoginFailed:true
    })
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

// function ShowInvalidCredentials(props){
//     if(props.checkLoginFailed){
//         return (
//             <div>Invalid Credentials</div>
//         )    
//     }
//     return null
// };

// function ShowLoginSuccessful(props){
//     if(props.hasLoginSuccessful){
//         return (
//             <div>Login Successful</div>
//         )
//     }
//     return null
// };

export default ToDoApp;