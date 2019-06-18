import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as request from 'superagent';
import { getDogBreeds } from './../actions/getBreed';
import DogBreed from './DogBreed';

class DogBreedContainer extends Component {
    componentDidMount() {
        // Retrieve the ID of the breed (name)
        const id = this.props.match.params.id;
        this.props.getDogBreeds(id);
    }

    render() {
        return (
            <DogBreed breed={'Breed Name'} images={this.props.dogBreedImages} />
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        dogBreedImages: reduxState.dogBreedImages
    }
}

const mapActionToProps = {
    getDogBreeds
}

export default connect(mapStateToProps, mapActionToProps)(DogBreedContainer);