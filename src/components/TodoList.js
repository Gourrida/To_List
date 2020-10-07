import React from 'react'
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render(){

    const {todos , updateTodoFn} = this.props;
    return (
        <div className = "todoListContainer"> 
          {
                
                todos.map((_todo,_index) => {
                return(
                <TodoItem updateTodoFn = {this.updatetodo}  key = {_index} todo = {_todo} ></TodoItem>)
                 } )  
                     
            }
        
        </div>
    )
    }
    updatetodo = (todo) => {
        this.props.updateTodoFn(todo);
    }

}

export default TodoList
