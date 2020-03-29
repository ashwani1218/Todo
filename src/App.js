import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import AddOption from './components/AddOption';

 class App extends Component {

  constructor(props){
    super(props);
    this.state={
      todos: []
    }
    this.handleAddTodo=this.handleAddTodo.bind(this);
    this.handleDeleteTodos = this.handleDeleteTodos.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }

  componentDidMount(){
    try{
      const todos = JSON.parse(localStorage.getItem('todos'));
      if(todos){
        this.setState(()=>({todos}));
      }
    }
    catch(e){

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.todos.length !== this.state.todos.length){
      const json = JSON.stringify(this.state.todos)
      localStorage.setItem("todos",json);
    }
  }
  

  handleAddTodo(todo){
    if(!todo){
      return 'Enter Valid value';
    }
    else if(this.state.todos.indexOf(todo)>-1){
      return "Already an Todo";
    }
    else{
      this.setState((prevState)=>({todos: prevState.todos.concat([todo])}));
    }
  }

  handleDeleteTodos(){
    this.setState(()=>({todos:[]}))
  }

  handleDeleteTodo(todoToRemove){
    this.setState((prevState)=>({
      todos: prevState.todos.filter((todo)  =>{ 
        return (todoToRemove !== todo) })
      }));
  }


  render(){
    
    return(<div className='App'> 
      <div className="App-content">
        <Header />
        <Todos 
          todos={this.state.todos} 
          handleDeleteTodos = {this.handleDeleteTodos}
          handleDeleteTodo = {this.handleDeleteTodo}/>

        <AddOption handleAddTodo = {this.handleAddTodo}/>
      </div>
      </div>
    );
  }
    
  
}

export default App;
