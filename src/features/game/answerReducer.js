import { SET_ANSWERED_BREED } from './actions/setAnsweredBreed';
/**
 * Reducer that stores a list of already answered breeds
 */
export default (state = [], action = {}) => {
    switch (action.type) {
        case SET_ANSWERED_BREED:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}
