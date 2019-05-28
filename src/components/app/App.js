import React, {Component} from 'react';
import AppAside from '../app-aside';
import AppContent from '../app-content';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

import './app.css';



export default class App extends Component{
  render (){
    return (
      <div class="container-fluid">
        <div class="row">
          <AppAside></AppAside>
          <AppContent></AppContent>
        </div>
      </div>
    );
  }
};


