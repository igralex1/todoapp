import React from 'react';
import TodoListItem from '../todo-list-item/';
import './todo-list.css';

class TodoList extends React.Component{
    render(){
        return(
            <div class="todo-list col">
                <h1>ToDo</h1>
               <TodoListItem number="2" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Praesentium reiciendis optio temporibus consectetur dolor, 
               ipsum doloribus tenetur a illo nihil id saepe. Sequi, dolorum sed quas itaque illo iste quis."  title="CSS"/>
               <TodoListItem number="1" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Praesentium reiciendis optio temporibus consectetur dolor, 
               ipsum doloribus tenetur a illo nihil id saepe. Sequi, dolorum sed quas itaque illo iste quis." title="JS"/>
               <TodoListItem number="3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Praesentium reiciendis optio temporibus consectetur dolor, 
               ipsum doloribus tenetur a illo nihil id saepe. Sequi, dolorum sed quas itaque illo iste quis." titile="HTML"/>
            </div>
        );
    }
};

export default TodoList;