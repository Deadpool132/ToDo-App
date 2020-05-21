import React,{Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

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
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
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
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                            }
                    </tbody>
                </table>
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render(){
        return (
            <header>
                <nav className="navbar navbar-expand-md">
                    <div><a>Vinay Garg</a></div>
                    <ul className="navbar-nav">
                        <li>Home</li>
                        <li>ToDos</li>
                    </ul>
                    <ul className="navbar-nav">
                        <li>Login</li>
                        <li>Logout</li>
                    </ul>
                </nav>
            </header>
        )
    }
}
class FooterComponent extends Component {
    render(){
        return (
            <div>
                <hr/>Footer
            </div>
        )
    }
}
class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                Welcome {this.props.match.params.name}. You can manage your ToDos <Link to="/todos">here</Link>
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