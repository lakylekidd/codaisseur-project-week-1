import React, { Component } from 'react'
import './AnswerField.css'

export default class AnswerField extends Component {

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
        const selectedClass = (breed.selected ? 'selected' : '');
        return (
            <div className="answerField">
                <button className={`answerButton ${(displayAnswer && answerClass)} ${selectedClass}`}
                    onClick={(e) => this.checkAnswer(breed, e)}
                    disabled={displayAnswer}>{breed.name}</button>
            </div >
        )
    }
}
