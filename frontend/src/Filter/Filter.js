import React from 'react';
import './Filter.css';

export class Filter extends React.Component {
    render() {
        <div className="filter">
           {this.renderChips(this.props.filters)}
        </div>
    }

    renderChips(filters) {

    }
}