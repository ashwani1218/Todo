import React,{Component} from 'react';

class AddOption extends Component{
    constructor(props){
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.state = {
            error:undefined
        }
    }
    handleAddTodo(e){
        e.preventDefault();
        const todo = e.target.elements.todo.value.trim();
        const error = this.props.handleAddTodo(todo);
        this.setState(()=>({error}));
        if(!error){
        e.target.elements.todo.value="";
        }
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error} </p>}
            <form onSubmit={this.handleAddTodo}>
              <input type="text" name="todo" placeholder="Add Todo"></input>
              <button>Add Todo</button>
            </form>
            </div>
        )
    }
}

export default AddOption;