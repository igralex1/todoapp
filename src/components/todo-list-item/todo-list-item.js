import React,{Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component{
    render(props){
        return(
            <div class="todo-list-item">
                <section class="todo-items">
                    <div class="todo-item">
                        <div class="todo-item-img">
                            <img src="" alt=""/>
                        </div>     
                        <div class="todo-item-content">
                            <h2>Task 1</h2>
                            <p>Learn React</p>
                        </div>
                    </div>
                </section>  
            </div>
        );
    }
};