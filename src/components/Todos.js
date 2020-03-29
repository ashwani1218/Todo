import React,{Component} from 'react';
import Todo from './Todo';

class Todos extends Component{
    
    render(){
        return(
            <div>
                {this.props.todos.length === 0 && <p>What you wanna todo?</p>}
                <button onClick={this.props.handleDeleteTodos}>Remove All</button>
                {
                    this.props.todos.map((todo)=><Todo 
                    key={todo}
                    todo={todo}
                    handleDeleteTodo = {this.props.handleDeleteTodo}
                    />)
                }
            </div>
        );
    }
}

export default Todos;