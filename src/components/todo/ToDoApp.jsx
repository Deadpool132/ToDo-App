import React,{Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import "./todo.css"

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
                <Route path="/welcome/:name" component={WelcomeComponent} />
                <Route path="/todos" component={ToDosComponent}/>
                <Route path="/logout" component={LogoutComponent}/>
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

class ToDosComponent extends Component {
    constructor(props){
        super(props)
            this.state = {
                todos : 
                [
                {id:1, description:'Learn React', done:false, targetDate: new Date()},
                {id:2, description:'Learn React', done:false, targetDate: new Date()},
                {id:3, description:'Learn React', done:false, targetDate: new Date()}
                ]
            }
        }
    
    render(){
        return(
            <div>
                <h1>List ToDos</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is completed?</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map( 
                                todo => 
                                <tr>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                            }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render(){
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div ><a className="navbar-brand" href="https://deadpool132.github.io/vgarg.github.io/">Vinay Garg</a></div>
                    <ul className="navbar-nav">
                        <li ><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                        <li ><Link className="nav-link" to="/todos">ToDos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end" >
                        <li ><Link className="nav-link" to="/login">Login</Link></li>
                        <li ><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
class FooterComponent extends Component {
    render(){
        return (
            <footer className="footer Layout container">
                <span class="text-muted">All Rights Reserved @2020 Vinay Garg</span>
            </footer>
        )
    }
}
class WelcomeComponent extends Component{
    render(){
        return(
            <>
              <h1>Welcome!</h1>
              <div className="container">
                Welcome {this.props.match.params.name}. You can manage your ToDos <Link to="/todos">here</Link>
            </div>
            </>

            
        )
    }
}

function ErrorComponent(){
    return <div>AN error has occured. You are using the wrong URL. Please validate your URL.</div>
}

class LogoutComponent extends Component{
    render(){
        return(
            <>
                <h1>You are logged out.</h1>
                <div class="container">
                    Thank you for using our application.
                </div>
            </>
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

export default ToDoApp;