import React, { Component } from 'react'
import './BreedImage.css';

export default class BreedImage extends Component {
    render() {
        // Retrieve the main breed and show its picture
        const { main } = this.props;
        return (
            <div className="breedImages">
                <img src={main.img} alt="Guess the breed" />
            </div>
        )
    }
}
