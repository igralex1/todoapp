import React from 'react';

import './app-aside.css';

const AppAside = () =>
{
    return(
          <aside class="aside__menu-left col-2">
              <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="btn-group-vertical btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-primary">
                        <input type="radio" name="options" id="option1" autocomplete="off" checked=""/> Home
                    </label>
                    <label class="btn btn-primary">
                        <input type="radio" name="options" id="option2" autocomplete="off"/> Setting
                    </label>
                    <label class="btn btn-primary active">
                        <input type="radio" name="options" id="option3" autocomplete="off"/> About
                    </label>
                </div>
              </nav>
              
            
        </aside>
    );
};

export default AppAside;