import { SET_ANSWERED_BREED } from './actions/setAnsweredBreed';
import { CLEAR_CURRENT_GAME_DATA } from './actions/clearCurrentGameData';

/**
 * Reducer that stores a list of already answered breeds and calculates the percentage of correct guesses in %
 */

const initialState = {
    answers: [],
    score: 0,
    gameOver: false,
    allowedWrongAnswers: 3,
    mistakes: 0,
    difficultyLevel: 0,
    guessBreedsToRetrieve: 2
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
            const mistakes = getWrongAnswers(newState.answers);
            const consecutiveCorrect = tallyCorrect(newState.answers);
            let level = newState.difficultyLevel;
            let retrieve = newState.guessBreedsToRetrieve
            if (consecutiveCorrect >= 5 && level < 2) {
                level++;
                retrieve = retrieve +3;
            }
            
            
            //if x mistakes are made, it's game over
            if (mistakes >= state.allowedWrongAnswers) {
                return {
                    answers: newState.answers,
                    score: percentage / newState.answers.length * 100,
                    gameOver: true,
                    allowedWrongAnswers: 3,
                    mistakes: mistakes,
                    difficultyLevel: level,
                    guessBreedsToRetrieve: retrieve
                }
            } else
                // Return the new state
                return {
                    answers: newState.answers,
                    score: percentage / newState.answers.length * 100,
                    gameOver: false,
                    allowedWrongAnswers: 3,
                    mistakes: mistakes,
                    difficultyLevel: level,
                    guessBreedsToRetrieve: retrieve
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
}

function getWrongAnswers(arrayOfAnswers) {
    
    const incorrectAnswers = arrayOfAnswers.reduce((count, currentAnswer) => {
        if (!currentAnswer.correct) {
            count++
        }
        return count
    }, 0)

    return incorrectAnswers;
}

function tallyCorrect(arrayOfAnswers) {
    if (!arrayOfAnswers.length) {
        return 0
    }
    const correctAnswers = arrayOfAnswers.reduce((count, currentAnswer) => {
        if (!currentAnswer.correct) {
            count = 0
        } else if (currentAnswer.correct && count < 5) {
            count++
        } else if (currentAnswer.correct && count === 5) {
            count =1
        }
        return count
    }, 0)
    return correctAnswers;
}
