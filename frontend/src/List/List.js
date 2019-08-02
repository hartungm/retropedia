import React from 'react';
// import ReactDOM from 'react-dom';
import './List.css';
import { Idea } from '../Idea/Idea';


import { sample } from '../sample.js';

export class List extends React.Component {
    render() {
        const ideas = sample.ideas.map((idea) => {
            return(
                <Idea idea={idea} />
            );
        });
        

        return(
            <div className="list">
                {ideas}
            </div>
        );
    }
}

