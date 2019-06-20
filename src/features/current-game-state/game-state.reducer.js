import {
    SET_CURRENT_GAME_STATE,
    IDLE_STATE,     // No game is currently running.
    START_STATE,    // Game welcome page showing
    RUNNING_STATE,  // Game logic running
    GAME_OVER_SATE  // Game over page showing with stats

} from './actions/setGameState';
import { SET_SHOW_ANSWER } from './actions/setShowAnswers';

// Define the initial state
const initialState = {
    gameId: null,
    showAnswers: false,
    state: IDLE_STATE
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_GAME_STATE:
            return setCurrentState(state, action);
        case SET_SHOW_ANSWER:
            console.log('show ansswers', action.payload)
            return {
                ...state,
                showAnswers: action.payload
            }
        default:
            return state;
    }
}

/**
 * Function that determines how the current 
 * state should be changed
 * @param {The current state} state 
 * @param {The requested action} action 
 */
function setCurrentState(state, action) {
    // Switch through requested state
    switch (action.payload.state) {
        case IDLE_STATE:
            return initialState;
        // For every state other than idle
        // Return the new state and game id
        case START_STATE:
        case RUNNING_STATE:
        case GAME_OVER_SATE:
            // Check if the game id matches current state
            if (state.gameId === action.payload.gameId ||
                state.gameId === null) {
                // If they match return the new payload
                return {
                    ...state,
                    ...action.payload
                }
            }
            // Otherwise return the initial state
            return initialState;
        default:
            return state;
    }
}