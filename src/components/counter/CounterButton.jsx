import React, {Component} from "react";
import "./Counter.css";

class CounterButton extends Component{
    constructor(){
        super();
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
    }
    
render(){
    return <div>
        <button onClick={this.increment}>{this.props.by}</button>
    </div>
}

increment() {
    this.setState(() => {
       return {counter : this.state.counter + this.props.by}
    })
    this.props.incrementMethod(this.props.by);
}
};

export default CounterButton;