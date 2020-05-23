import React,{Component} from "react";
import {Link} from "react-router-dom"
import HelloWorldService from "../../api/todo/HelloWorldService.js"

class WelcomeComponent extends Component{
    constructor(props){
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        this.state = {
            welcomeMessage : ''
        }
    }
    render(){
        return(
            <>
              <h1>Welcome!</h1>
              <div className="container">
                Welcome {this.props.match.params.name}. You can manage your ToDos <Link to="/todos">here</Link>
            </div>
            <div className="container">
            <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>Hello World Service</button>
            </div>
            <div className="container">
                {this.state.welcomeMessage}
            </div>
            </>  
        )
    }
    retrieveWelcomeMessage(){
        HelloWorldService.exeuteHelloWorldService()
        .then(response => this.handleSuccessfulResponse(response));
    }
    handleSuccessfulResponse(response){
        this.setState({welcomeMessage: response.data.message})
    }
}

export default WelcomeComponent;