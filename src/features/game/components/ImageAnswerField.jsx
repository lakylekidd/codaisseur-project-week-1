import React, { Component } from 'react'
import './ImageAnswerField.css'
import BreedImage from './BreedImage'

export default class ImageAnswerField extends Component {

    checkAnswer = (breed, e) => {
        // Retrieve the answer function from parent
        const answer = this.props.answer;
        breed.selected = true;
        // Check against the answer
        answer(breed);
    }

    render() {
        // Gives a selection of answers, one correct, the others incorrect
        const { breed, displayAnswer } = this.props;
        // Determine the class to display based on correct or false
        const answerClass = (breed.correct ? 'correct' : 'falsy');
        const selectedClass = (breed.selected ? 'selected' : ' ');
        console.log(answerClass)
        return (
            <div className="answer-field">
                <button className={`ImageAnswerButton ${(displayAnswer ? answerClass : '')} ${selectedClass}`}
                    onClick={(e) => this.checkAnswer(breed, e)}
                    disabled={displayAnswer}>
                    <BreedImage main={breed} />
                </button>
                {/* answer={this.answer} displayAnswer={this.state.displayAnswer} /> */}
            </div >
        )
    }
}
