import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDogBreeds } from './../actions/getBreed';
import DogBreed from './DogBreed';

class DogBreedContainer extends Component {
    componentDidMount() {
        // Retrieve the ID of the breed (name)
        const id = this.props.match.params.id;
        this.props.getDogBreeds(id);
    }

    render() {
        const id = this.props.match.params.id;
        return (
            <DogBreed breed={id} images={this.props.dogBreedImages} />
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