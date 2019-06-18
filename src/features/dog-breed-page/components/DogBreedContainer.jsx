import React, { Component } from 'react'

export default class DogBreedContainer extends Component {
    render() {
        const id = this.props.match.params.id;
        console.log(id);
        return (
            <div>
                <h1></h1>
            </div>
        )
    }
}
