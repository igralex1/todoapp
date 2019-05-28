import React from 'react';
import NavTool from '../nav-tool';
import TodoList from '../todo-list';
import CompletedList from '../comleted-list';
import bootstrap from 'bootstrap';
import './app-content.css'


//  NavTools
//  TodoList
//  CompletedList

const AppContent = () => {
    return(
      <div>
        <NavTool />
        <TodoList />
        <CompletedList /> 
      </div>
    );
};

export default AppContent;