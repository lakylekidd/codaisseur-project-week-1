export const SET_SHOW_ANSWER = 'SET_SHOW_ANSWER';

export function setShowAnswers(val = false) {
    return {
        type: SET_SHOW_ANSWER,
        payload: val
    }
}