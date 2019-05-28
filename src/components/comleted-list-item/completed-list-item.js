import React, {Component} from 'react';
import './completed-list-item.css';

export default class completedListItem extends Component {
    render(){
        return(
            <section class="comleted-items">
                <div class="comleted-item">
                <div class="comleted-items-img">
                    <img src="" alt=""/>
                </div>     
                <div class="comleted-item-content">
                    <h2>Lorem Ipsum</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                </div>
            </section>   
        );
    }
}; 