import React,{Component} from 'react';
import NavTool from '../nav-tool';
import TodoList from '../todo-list';
import CompletedList from '../comleted-list';
import bootstrap from 'bootstrap';
import './app-content.css'


export default class AppContent extends Component{
  

  // state = {
  //   todoData: [
  //     this.createTodoItem('Drink Coffee'),
  //     this.createTodoItem('Make Awesome App'),
  //     this.createTodoItem('Have a lunch')
  //   ]
  // };

  // createTodoItem(label) {
  //   return {
  //     title
  //   }
  // }
  

  render(){
    return(
        <div class="col pl-0 pr-0">
          <NavTool/>
          <TodoList  />
          <CompletedList /> 
        </div>
      );
  }
};
