import * as request from 'superagent'

export const SET_DOGS = "SET_DOGS"

export function setDogs(breeds) {
    return {
        type: "SET_DOGS",
        payload: breeds
    }
}

export function getDogs() {
    return function (dispatch) {
        request('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const breeds = Object.keys(response.body.message)
            })
            .then(breeds => {
                dispatch(setDogs(breeds))
            })
        }
}