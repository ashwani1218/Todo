import React,{Component} from 'react';

class Todo extends Component{
    render() {
        return (
            <div>
                {this.props.todo}
                <button onClick={(e)=>{
                    this.props.handleDeleteTodo(this.props.todo)
                }}> remove </button>
            </div>
        );
    }
}
export default Todo;