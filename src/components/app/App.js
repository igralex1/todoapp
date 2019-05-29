import React, {Component} from 'react';
import AppAside from '../app-aside';
import AppContent from '../app-content';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

import './app.css';



export default class App extends Component{
  render (){
    return (
      <div class="d-flex align-items-stretch">
          <AppAside></AppAside>
          <AppContent></AppContent>
      </div>
    );
  }
};


