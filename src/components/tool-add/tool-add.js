import React, {Component} from 'react';
import './tool-add.css';

export default class ToolAdd extends Component{
    

    render(){
        return(
            <a class="nav-link" href="#" onClick={() => this.props.onItemAdd('hello')}>Add task <span class="sr-only">(current)</span></a>
        );
    }
};