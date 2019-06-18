import React, { Component } from 'react';
import * as request from 'superagent';
import DogBreed from './DogBreed';

export default class DogBreedContainer extends Component {

    state = {
        dogBreedImages: []
    }

    addImages(breedImages) {
        var size = 10;
        var items = breedImages.slice(0, size).map(i => {
            console.log(i);
        })
    }

    componentDidMount() {
        request('https://dog.ceo/api/breed/hound/images')
            .then(r => r.body.message)
            .then(data => {
                var size = 10;
                var items = data.slice(0, size);
                this.setState({ dogBreedImages: items })
            });
    }

    render() {
        const id = this.props.match.params.id;
        return (
            <DogBreed breed={'Breed Name'} images={this.state.dogBreedImages} />
        )
    }
}
