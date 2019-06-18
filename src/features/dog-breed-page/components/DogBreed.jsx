import React, { Component } from 'react';
import './DogBreed.css';

export default class DogBreed extends Component {
    renderImage(image) {
        return (
            <li key={image}>
                <img src={image} alt={'Dog url'} />
            </li>
        )
    }
    render() {
        // Retrieve the list of images
        const { images, breed } = this.props;
        return (
            <div className={'breed-page'}>
                <h1>{breed}</h1>
                {
                    !images &&
                    "Loading images"
                }
                {
                    images &&
                    <ul className={'breed-images'}>
                        {images.map(this.renderImage)}
                    </ul>
                }
            </div>
        )
    }
}
