export const SET_GUESS_BREEDS = 'SET_GUESS_BREEDS';

/**
 * Action that sets the guess breeds
 */
export function setGuessBreeds(breeds) {
    return {
        type: SET_GUESS_BREEDS,
        payload: breeds
    }
}