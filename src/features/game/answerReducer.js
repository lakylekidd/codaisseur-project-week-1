import { SET_ANSWERED_BREED } from './actions/setAnsweredBreed';
import { SET_PERCENTAGE } from './actions/setPercentage'
/**
 * Reducer that stores a list of already answered breeds
 */

 const initialState = {
     answers: [],
     score: 0
}
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_ANSWERED_BREED:
            return {
                ...state,
                answers: [...state.answers, action.payload]
            }
            /*
            state.answers = [
                ...state.answers,
                action.payload
            ]*/
        case SET_PERCENTAGE:
            return {
                ...state, score: action.payload / state.answers.length * 100
            }
        default:
            return state
    }
}
