import React,{Component} from 'react';
import './Todo.css'
class Todo extends Component{
    render() {
        return (
            <div className="Todo">
                <div className="Todo-text">
                    {this.props.todo}
                </div>
                <div className="Todo-button">
                    <button onClick={(e)=>{
                        this.props.handleDeleteTodo(this.props.todo)
                    }}> remove </button>
                </div>
            </div>
        );
    }
}
export default Todo;