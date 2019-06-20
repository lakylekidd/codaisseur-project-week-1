import { SET_ANSWERED_BREED } from './actions/setAnsweredBreed';
import { CLEAR_CURRENT_GAME_DATA } from './actions/clearCurrentGameData';

/**
 * Reducer that stores a list of already answered breeds and calculates the percentage of correct guesses in %
 */

const initialState = {
    answers: [],
    score: 0
}
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_ANSWERED_BREED:
            // Construct new state
            const newState = {
                ...state,
                answers: [...state.answers, action.payload]
            };
            // Answers retrieved
            const percentage = getPercentage(newState.answers);
            // Return the new state
            return {
                answers: newState.answers,
                score: percentage / newState.answers.length * 100
            }
        case CLEAR_CURRENT_GAME_DATA:
            return initialState;
        default:
            return state
    }
}

function getPercentage(arrayOfAnswers) {
    if (!arrayOfAnswers.length) {
        return 0
    }
    const correctAnswers = arrayOfAnswers.reduce((count, currentAnswer) => {
        if (currentAnswer.correct) {
            count++
        }
        return count
    }, 0)

    return correctAnswers
    //correctAnswers/arrayOfAnswers.length * 100
}