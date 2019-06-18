import React, { Component } from 'react'

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
            <div>
                <h1>{breed}</h1>
                {
                    !images &&
                    "Loading images"
                }
                {
                    images &&
                    <ul>
                        {images.map(this.renderImage)}
                    </ul>
                }
            </div>
        )
    }
}
