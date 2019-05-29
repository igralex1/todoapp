import React,{Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component{
        
        state = {
            done: false
        }

        onTitleClick = () =>{
           this.setState({
               done: true,
               priority: false
           });
        }; 
   
        render(props){
        const {done} = this.state;
        
        let classNames = 'card border-secondary mb-3 ';
        if(done){
            classNames +='alert-success';
        }

        const {title} = this.props; // props TodoListITem

        return(
            <div class={classNames} onClick = { this.onTitleClick }>
                
                <div>
                    <div class="card-header">
                        Task {this.props.number}
                        <div class="float-right hidden" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-5 0h-2v-2h2v2zm0-4h-2V8h2v4zm-1 10c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2z"/>
                            <path fill="none" d="M0 0h24v24H0V0z"/></svg>
                        </div>
                    </div>
                <div class="card-body">
                    <h4 class="card-title">{this.props.title}</h4>
                    <p class="card-text">{this.props.text}</p>
                </div>
                </div>
            </div>
            
        );
    }
};