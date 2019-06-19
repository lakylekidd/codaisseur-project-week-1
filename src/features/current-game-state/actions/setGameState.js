export const SET_CURRENT_GAME_STATE = 'SET_CURRENT_GAME_STATE';

// Define the available global game states
export const STATES = 'IDLE' | 'START' | 'RUNNING' | 'GAME_OVER';

/**
 * Action that sets the current game state
 */
export function setGameState(state, gameId = null) {
    return {
        type: SET_CURRENT_GAME_STATE,
        payload: {
            state, gameId
        }
    }
}