export const SET_ANSWERED_BREED = 'SET_ANSWERED_BREED';

/**
 * Action that sets the answered breeds into an array
 */
export function setAnsweredBreed(breed) {
    return {
        type: SET_ANSWERED_BREED,
        payload: breed
    }
}