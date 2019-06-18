import React, { Component } from 'react';
import * as request from 'superagent';
import DogBreed from './DogBreed';

export default class DogBreedContainer extends Component {

    state = {
        dogBreedImages: []
    }

    componentDidMount() {
        // Retrieve the ID of the breed (name)
        const id = this.props.match.params.id;
        // Fetch data based on breed name
        request(`https://dog.ceo/api/breed/${id}/images`)
            .then(r => r.body.message)
            .then(data => {
                var size = 10;
                var items = data.slice(0, size);
                this.setState({ dogBreedImages: items })
            });
    }

    render() {

        return (
            <DogBreed breed={'Breed Name'} images={this.state.dogBreedImages} />
        )
    }
}
