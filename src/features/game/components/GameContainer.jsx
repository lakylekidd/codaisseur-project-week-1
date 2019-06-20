import React, { Component } from 'react';
import Game1Container from './Game1Container';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
    setGameState,
    IDLE_STATE,     // No game is currently running.
    START_STATE,    // Game welcome page showing
    RUNNING_STATE,  // Game logic running
    GAME_OVER_SATE  // Game over page showing with stats
} from './../../current-game-state/actions/setGameState';
import { getBreedsArray } from './../actions/getBreedsArray';
import { setMainBreed } from './../actions/setMainBreed';
import { setGuessBreeds } from './../actions/setGuessBreeds';
import { setAnsweredBreed } from './../actions/setAnsweredBreed';
import Game1Welcome from './Game1Welcome';

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

        // next question
        setTimeout(() => {
            this.getNextRandomBreed();
            this.getNextRandomBreeds(2);
        }, 2000);
    }

    /**
     * Function that returns a random breed
     * which will act as the main breed
     */
    getNextRandomBreed = () => {
        // Retrieve a random breed using a random id
        const uniqueBreed = this.getUniqueBreed(this.getRndId());
        // Check if nothing is returned 
        if (uniqueBreed) {
            // Breed is returned, set as main breed
            this.props.setMainBreed(uniqueBreed);
            return;
        }
        return this.getNextRandomBreed();
    }
    /**
     * Function that will return a specified number
     * of random breeds which will act as the guesses
     */
    getNextRandomBreeds = (number) => {
        // Generate array to hold breeds
        let guesses = [];
        // Loop through required number of breeds
        let g = 0;
        for (let i =0; i < number || g >= 30; i++, g++) {
            // Get random number
            const rndId = this.getRndId();            
            // Check if it random breed exists in the answers
            const isMain = this.props.current.main.id  === rndId;
            // Is the id also the main?
            if (isMain) {
                // Random breed is the main breed,
                // pick a next one
                i--;
                continue;
            } else {
                // Get the 
                const rndBreed = this.props.breeds.find(b => b.id === rndId);
                // Random breed is not main, add to array
                guesses.push(rndBreed)
            }
        }
        // Set the guesses
        this.props.setGuessBreeds(guesses);
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

    componentWillMount() {
        // When we enter any game, we need to fetch all the breeds
        // and make them into custom objects that contain their images
        // this will ensure less api calls during the game
        this.props.getBreedsArray();

    }

    componentWillUnmount() {
        // Set the state back to idle
        this.props.setGameState(IDLE_STATE, 1);

    }

    render() {
        return (
            <div>
                {
                    this.props.current &&
                    <div>
                        {
                            // Check if the current state is set to start
                            // If so, show the welcome page
                            this.props.gameState.state === START_STATE &&
                            <Game1Welcome />
                        }
                        {
                            this.props.gameState.state === RUNNING_STATE &&
                            < Game1Container main={this.props.current.main} guesses={this.props.current.guesses} answer={this.answer} />
                        }
                        {
                            this.props.gameState.state === IDLE_STATE &&
                            <Redirect to='/' />
                        }
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        answered: store.answered.answers,
        breeds: store.breeds,
        current: store.currentGameData,
        gameState: store.currentGameState
    }
}
const mapDispatchToProps = {
    getBreedsArray,
    setMainBreed,
    setGuessBreeds,
    setAnsweredBreed,
    setGameState
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
