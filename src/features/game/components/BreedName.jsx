import React, { Component } from 'react'

export default class BreedName extends Component {
    render() {
        // Retrieve the main breed and show its name
        const { main } = this.props;
        return (
            <div className={"breedName"}>
                {main.name}
            </div>
        )
    }
}