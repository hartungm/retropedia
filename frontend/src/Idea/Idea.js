import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export class Idea extends React.Component {
    render() {
        const idea = this.props.idea;
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