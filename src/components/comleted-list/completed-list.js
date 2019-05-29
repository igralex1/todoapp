import React from 'react';
import CompletedListItem from '../comleted-list-item';
import './completed-list';

const CompletedList = () => {
    return(
        <div class="comleted-list col">
            <h1>Comleted Tasks</h1>
            <CompletedListItem/>
            <CompletedListItem/>
            <CompletedListItem/>

        </div>
    );
} 

export default CompletedList;