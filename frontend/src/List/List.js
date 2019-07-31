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
            <Card className="card" key={idea.key}>
                <CardContent>
                    <Typography className="title" variant="h5" component="h2">
                        {idea.name}
                    </Typography>
                    <Typography className="description-title" color="textSecondary">
                        Description:
                    </Typography>
                    <Typography variant="body2" component="p">
                        {idea.description}
                    </Typography>
                    {this.renderIntent(idea.intent)}
                </CardContent>
            </Card>
        );
    }

    renderIntent(intent) {
        console.log(intent);
        if(intent !== null && intent !== undefined) {
            return (
                <div className="intent">
                    <Typography className="intent-title" color="textSecondary">
                        Intent:
                    </Typography>
                    <Typography variant="body2" component="p">
                        {intent}
                    </Typography>
                </div>
            );
        }
    }
}

