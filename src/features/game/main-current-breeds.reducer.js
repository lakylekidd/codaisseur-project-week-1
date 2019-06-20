import { SET_MAIN_BREED } from './actions/setMainBreed';
import { SET_GUESS_BREEDS } from './actions/setGuessBreeds';
import { CLEAR_CURRENT_GAME_DATA } from './actions/clearCurrentGameData';

const initialState = {
    main: {
        id: 0
    }
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_GUESS_BREEDS:
            return {
                ...state,
                guesses: action.payload
            }
        case SET_MAIN_BREED:
            return {
                ...state,
                main: action.payload
            };
        case CLEAR_CURRENT_GAME_DATA:
            return initialState;
        default:
            return state
    }
}