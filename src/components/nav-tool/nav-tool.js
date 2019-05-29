import React,{Component} from 'react';
import ToolShow from '../tool-show/';
import ToolPriority from '../tool-priority/';
import ToolSort from '../tool-sort/';
import ToolAdd from '../tool-add/';

import './nav-tool.css';

export default class NavTool extends Component{

    onItemAdd= (text) =>{
      console.log(text);
    }

    render(){
      return(
         <header class="nav-tools col pl-0 pr-0">
            <nav class="navbar navbar-expand navbar-light bg-light">
              <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#"><ToolShow /> <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><ToolPriority/></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><ToolSort/></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><ToolAdd onItemAdd={this.onItemAdd}/></a>
                  </li>
                </ul>
              </div>
            </nav>

        </header>
      );
    }
};

