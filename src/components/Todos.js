import React,{Component} from 'react';
import Todo from './Todo';
import './Todos.css'
class Todos extends Component{

    render(){
        return(
            <div className='Todos'>
                <div className='Todos-remove-all'>
                    <button onClick={this.props.handleDeleteTodos}>Remove All</button>
                    {this.props.todos.length === 0 && <p>What you wanna todo?</p>}
                </div>
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