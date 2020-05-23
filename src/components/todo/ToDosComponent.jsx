import React,{Component} from "react";
import ToDoService from "../../api/todo/ToDoDataService.js";
import AuthenticationService from "./AuthenticationService.js"

class ToDosComponent extends Component {
    constructor(props){
        super(props)
            this.state = {
                todos : [],
                message : null
            }
            this.deleteToDo = this.deleteToDo.bind(this);
            this.refreshToDo = this.refreshToDo.bind(this);
            this.updateToDo = this.updateToDo.bind(this);
        }
        componentDidMount(){          
            this.refreshToDo();
        }

        refreshToDo(){
            const username = AuthenticationService.getUserLoggedIn();
            ToDoService.retrieveAllToDos(username)
            .then(
                response => {
                this.setState({todos : response.data})
            })
        }
    
    render(){
        return(
            <div>
                <h1>List ToDos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is completed?</th>
                            <th>Target Date</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map( 
                                todo => 
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.completed.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-success" onClick={() => this.updateToDo(todo.id)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteToDo(todo.id)}>Delete</button></td> 
                                </tr>
                            )
                            }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
    deleteToDo(id){
        const username = AuthenticationService.getUserLoggedIn();
        console.log(username,id)
        ToDoService.deleteToDo(username,id)
        .then(
            response => {
                this.setState({message: `Delete of ToDo with id ${id} successful`})
                this.refreshToDo();
            }
        )
    }
    updateToDo(id){
        this.props.history.push(`/todos/${id}`);
    }
}

export default ToDosComponent;