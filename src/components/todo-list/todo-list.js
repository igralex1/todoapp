import React from 'react';
import TodoListItem from '../todo-list-item/';
import './todo-list.css';

class TodoList extends React.Component{
    render(){
        return(
            <div class="todo-list">
                <h1>ToDo</h1>
               <TodoListItem />
               <TodoListItem />
               <TodoListItem />
            </div>
        );
    }
};

export default TodoList;