import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { List } from './List/List';

class App extends React.Component {
    render() {
        return(
            <div className="app">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <List />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);