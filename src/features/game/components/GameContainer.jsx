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
import { setShowAnswers } from './../../current-game-state/actions/setShowAnswers';
import { clearCurrentGameData } from './../actions/clearCurrentGameData';
import Game1Welcome from './Game1Welcome';
import GameOver from '../../game-over-page/GameOver';

class GameContainer extends Component {

    answer = (breed) => {
        // Retrieve the needed properties from the breed
        const { id, name, img } = breed;
        // Check if answer was truthy or falsy
        const correct = this.props.current.main.id === id;
        // Set the answered breed

        this.props.setAnsweredBreed({
            id, name, img, correct
        });

        // next question
        setTimeout(() => {
            this.props.setShowAnswers(false);
            const isGameOver = this.checkIfGameOver();
            if (!isGameOver) {
                this.initNewQuestion()
            }
        }, 2000);
    }
    /**
     * function will set up a new question
     */
    initNewQuestion = () => {
        this.getNextRandomBreed();
        const rndBreeds = this.getNextRandomBreeds(this.props.breedsToRetrieve);
        // Set the guesses
        this.props.setGuessBreeds(rndBreeds);
    }

    /**
     * Function that returns a random breed
     * which will act as the main breed
     */
    getNextRandomBreed = () => {
        // Retrieve a random breed using a random id
        const uniqueBreed = this.getUniqueBreed(this.getRndId(this.props.breeds));
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

        // Get a new array of breeds 
        let filteredBreeds = this.props.breeds
            .filter(b => b.id !== this.props.current.main.id); // Filter out the current main breed

        // Loop through required number of breeds
        for (let i = 0; i < number; i++) {
            // Get random id from filtered breeds
            const rndId = this.getRndId(filteredBreeds);
            // Check if it random breed exists in the answers
            const isMain = this.props.current.main.id === rndId;
            // Check if the random breed exists in the guesses
            const alreadyAdded = guesses.includes(breed => breed.id === rndId);

            // Make checks
            if (isMain || alreadyAdded) {
                // Choose another breed
                i = guesses.length - 1;
                continue;
            }

            // Get the breed from the list
            const rndBreed = filteredBreeds.find(b => b.id === rndId);

            // Remove possibility of null breeds
            if (!rndBreed) {
                i = guesses.length - 1;
                continue;
            }

            // Filter out the current random breed
            filteredBreeds = filteredBreeds.filter(breed => breed.id !== rndId);
            // Random breed is not main, add to array
            guesses.push(rndBreed);
        }

        // Check if all items of the guesses array are set
        const nullFound = guesses.includes(x => {
            console.log(x)
            if (x) return true;
            return false;
        });
        console.log("Null Found: ", nullFound, "In Array: ", guesses)
        if (nullFound) {
            return this.getNextRandomBreeds(number)
        }
        return guesses;
    }


    getUniqueBreed = (id, loopCount = 0) => {
        // Check if all dogs have been answered
        if (this.props.answers.length === this.props.breeds.lenght ||
            loopCount >= 20) {
            // All dogs have been answered OR
            // the recursion hit 20 or more recursions return null
            return null;
        }

        // Check if the breed has already been answered
        if (this.props.answers.includes(b => b.id === id)) {
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
    getRndId = (breeds) => {
        return Math.floor(Math.random() * breeds.length);
    }

    componentWillMount() {
        // When we enter any game, we need to fetch all the breeds
        // and make them into custom objects that contain their images
        // this will ensure less api calls during the game

        this.props.getBreedsArray();

    }
    checkIfGameOver() {
        if (this.props.gameOver) {
            this.props.setGameState(GAME_OVER_SATE, this.props.gameState.gameId);
        }
        return this.props.gameOver
    }
    componentWillUnmount() {
        // Set the state back to idle
        this.props.setGameState(IDLE_STATE, 1);
        // Clear game data
        this.props.clearCurrentGameData();

    }

    render() {
        return (
            <div>
                {
                    // Only render page if we have a current question
                    this.props.current &&
                    <div>
                        {
                            // Check if the current state is set to start
                            // If so, show the welcome page
                            this.props.gameState.state === START_STATE &&
                            <Game1Welcome question={this.initNewQuestion} />
                        }
                        {
                            // Check if the current state is set to running
                            // If so, show the game one container
                            // TODO: Figure out which container to show 
                            // based on the game id from the current state
                            this.props.gameState.state === RUNNING_STATE &&
                            < Game1Container main={this.props.current.main} guesses={this.props.current.guesses} answer={this.answer} />
                        }
                        {
                            // Check if the current state is set to idle
                            // If so, redirect to the home page.
                            this.props.gameState.state === IDLE_STATE &&
                            <Redirect to='/' />
                        }
                        {
                            // Check if the current state is set to game over
                            // If so, render the game over page.
                            this.props.gameState.state === GAME_OVER_SATE &&
                            <GameOver />
                        }
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        answers: store.answered.answers,
        gameOver: store.answered.gameOver,
        breedsToRetrieve: store.answered.guessBreedsToRetrieve,
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
    setGameState,
    setShowAnswers,
    clearCurrentGameData
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
