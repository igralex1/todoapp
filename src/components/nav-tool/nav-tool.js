import React from 'react';
import ToolShow from '../tool-show/';
import ToolPriority from '../tool-priority/';
import ToolSort from '../tool-sort/';
import ToolAdd from '../tool-add/';

import './nav-tool.css';

const NavTool = () => {
    return(
        <header class="nav-tools col">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
                    <a class="nav-link" href="#"><ToolAdd/></a>
                  </li>
                </ul>
              </div>
            </nav>

        </header>
    );

};

export default NavTool; 