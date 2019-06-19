export const SET_MAIN_BREED = 'SET_MAIN_BREED';

/**
 * Action that sets the main breed
 */
export function setMainBreed(breed) {
    return {
        type: SET_MAIN_BREED,
        payload: breed
    }
}