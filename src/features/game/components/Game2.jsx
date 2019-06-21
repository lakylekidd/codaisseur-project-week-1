import React, { Component } from 'react'
import BreedImage from './BreedImage';
import BreedName from './BreedName';
import './Game2.css';
import ImageAnswerField from './ImageAnswerField';

export default class Game1 extends Component {

    state = {
        displayAnswer: false
    }

    answer = (breed) => {
        // Retrieve the answer from the parent
        const checkAnswer = this.props.answer;

        // Call the answer and check result
        checkAnswer(breed);

        // Set to display answers
        this.setState({
            displayAnswer: true
        })

    }
    //pass props to ImageAnswerField
    renderAnswerItem = (breed) => {
        return (
            <li key={breed.id} style={{ order: breed.id }}>
                <ImageAnswerField breed={breed} answer={this.answer} displayAnswer={this.props.show} />
            </li>
        );
    }

    renderPage() {
        const { main, guesses } = this.props;
        // Create new array that will hold all the breeds
        let allBreeds = [];

        // Check if main and guesses are passed
        if (main && guesses) {
            // Pass in the main breed with a correct property
            allBreeds = [
                { ...main, correct: true, selected: false }, // First render the correct breed and mark it as correct
                ...guesses.map(breed => {      // Then pass in the array of guess breeds and mark them as inccorrect
                    return {
                        ...breed,
                        correct: false,
                        selected: false
                    }
                })
            ];
        }
        // Determine what to render on the page
        return (
            <div>
                <div className={'image-container'}>
                    <BreedName main={main} />
                </div>
                <div className={'answers-container'}>
                    {
                        allBreeds.length > 0 ?
                            <ul className="guesses">
                                {
                                    allBreeds.map(this.renderAnswerItem)
                                }
                            </ul>
                            :
                            'Loading answers...'
                    }
                </div>
            </div>
        );
    }

    render() {
        // Retreive the properties from the parent component
        return this.renderPage();
    }
}