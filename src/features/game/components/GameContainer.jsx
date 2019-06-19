import React, { Component } from 'react'
import Game1Container from './Game1Container'
import { connect } from 'react-redux'
import { getBreedsArray } from './../actions/getBreedsArray';
import { setMainBreed } from './../actions/setMainBreed';
import { setGuessBreeds } from './../actions/setGuessBreeds';
import { setAnsweredBreed } from './../actions/setAnsweredBreed';

class GameContainer extends Component {
    answer = (breed) => {
        // let action = {
        //     type: 'ADD ANSER',
        //     payload: null
        // }
        // if (breed.id === this.props.current.main.id) {
        //     action.payload = true
        // } else {
        //     action.payload = false
        // }

        // Retrieve the needed properties from the breed
        const { id, name, img } = breed;
        // Check if answer was truthy or falsy
        const correct = this.props.current.main.id === id;
        // Set the answered breed
        this.props.setAnsweredBreed({
            id, name, img, correct
        });
        //this.getNextRandomBreed();
    }

    /**
     * Function that returns a random breed
     */
    getNextRandomBreed = () => {
        // Retrieve a random breed using a random id
        const uniqueBreed = this.getUniqueBreed(this.getRndId());
        // Check if nothing is returned 
        if (uniqueBreed) {
            // Breed is returned, set as main breed
            this.props.setMainBreed(uniqueBreed);
        }
    }
    getNextRandomBreeds = (number) => {

    }


    getUniqueBreed = (id, loopCount = 0) => {
        // Check if all dogs have been answered
        if (this.props.answered.length === this.props.breeds.lenght ||
            loopCount >= 20) {
            // All dogs have been answered OR
            // the recursion hit 20 or more recursions return null
            return null;
        }

        // Check if the breed has already been answered
        if (this.props.answered.includes(b => b.id === id)) {
            // Breed has already been answered
            let newRandomId = id + 1;
            // Check if new random id is more than breeds length
            if (newRandomId >= this.props.breeds.lenght) {
                newRandomId = 1; // Reset it back to one
            }
            return this.getUniqueBreed(newRandomId, ++loopCount);
        }
        // If code reached this far then the breed has not
        // been answered yet
        // Retrieve the breed based on the random id
        return this.props.breeds.find(b => b.id === id);
    }

    /**
     * Returns a random ID from the breeds list
     */
    getRndId = () => {
        return Math.floor(Math.random() * this.props.breeds.length);
    }

    componentDidMount() {
        // When we enter any game, we need to fetch all the breeds
        // and make them into custom objects that contain their images
        // this will ensure less api calls during the game
        this.props.getBreedsArray();
    }

    render() {
        return (
            <div>
                {
                    this.props.current &&
                    < Game1Container main={this.props.current.main} guesses={this.props.current.guesses} answer={this.answer} />
                }
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        answered: store.answered,
        breeds: store.breeds,
        current: store.currentGameData
    }
}
const mapDispatchToProps = {
    getBreedsArray,
    setMainBreed,
    setGuessBreeds,
    setAnsweredBreed
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
