import React from 'react';
import ReactDOM from 'react-dom';
import './List.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import { sample } from '../sample.js';

export class List extends React.Component {
    render() {
        const ideas = sample.ideas.map((idea) => {
            return this.renderIdea(idea);
        });
        

        return(
            <div className="list">
                {ideas}
            </div>
        );
    }

    renderIdea(idea) {
        return(
            <Card className="card">
                <CardContent>
                    <Typography className="title" color="textSecondary" gutterBottom>
                        {idea.name}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

