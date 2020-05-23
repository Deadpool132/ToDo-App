import React,{Component} from "react"

class UpdateToDoCOmponent extends Component{
    render(){
        return (
            <div>ToDoComponent for id {this.props.match.params.id} </div>
        )
    }
}

export default UpdateToDoCOmponent