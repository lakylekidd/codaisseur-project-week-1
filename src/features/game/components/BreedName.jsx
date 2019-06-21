import React, { Component } from 'react';
import './BreedName.css';

export default class BreedName extends Component {
    render() {
        // Retrieve the main breed and show its name
        const { main } = this.props;
        return (
            <div className={"breed"}>
                <h1>Which dog is this?</h1>
                <div className="breed-name">
                    {main.name}
                </div>
            </div>
        )
    }
}