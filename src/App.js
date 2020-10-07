import React,{useState} from 'react';

import './App.css';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos : []
    };
  }

  render() {
  return (
    <div>
      <AddTodo addTodoFn = {this.addTodo} ></AddTodo>
       <TodoList updateTodoFn = {this.updatetodo} todos = {this.state.todos}></TodoList>
       <TodoItem todo = {this.state.todos}/>
       
    </div>
  );
}
  componentDidMount = () =>{
 const todos = localStorage.getItem('todos');
 if(todos){
const savedTodos = JSON.parse(todos);
this.setState({todos : savedTodos});
 }
 else{
console.log("hello no todos")
 } 
  }
  
addTodo = async (todo) =>{
await this.setState({todos: [...this.state.todos,{
  text : todo ,
  completed : false
}]})
localStorage.setItem('todos',JSON.stringify(this.state.todos))
console.log(localStorage.getItem('todos'))
}

updatetodo = async (todo) => {
const newtodos = this.state.todos.map(_todo => {
if(todo === _todo)
  return{ 
    text: todo.text ,
    completed: !todo.completed
  }
else
return _todo

});
await this.setState({todos : newtodos})
localStorage.setItem('todos', JSON.stringify(this.state.todos))
}


}



export default App;
