export const SET_CURRENT_GAME_STATE = 'SET_CURRENT_GAME_STATE';

// Define the available global game states
export const IDLE_STATE = 'IDLE';
export const START_STATE = 'START';
export const RUNNING_STATE = 'RUNNING';
export const GAME_OVER_SATE = 'GAME_OVER'

/**
 * Action that sets the current game state with default 
 * state idle and game id null
 */
export function setGameState(state = IDLE_STATE, gameId = null) {
    return {
        type: SET_CURRENT_GAME_STATE,
        payload: {
            state, gameId
        }
    }
}