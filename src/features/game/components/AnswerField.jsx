import React, { Component } from 'react'
import './AnswerField.css'

export default class AnswerField extends Component {

    checkAnswer = (breed) => {
        // Retrieve the answer function from parent
        const answer = this.props.answer;
        // Check against the answer
        answer(breed);
    }

    render() {
        // Gives a selection of answers, one correct, the others incorrect
        const { breed, displayAnswer } = this.props;
        // Determine the class to display based on correct or false
        const answerClass = (breed.correct ? 'correct' : 'falsy')
        return (
            <div className="answerField">
                <button className={`answerButton ${(displayAnswer && answerClass)}`} onClick={() => this.checkAnswer(breed)}>{breed.name}</button>
            </div>
        )
    }
}
