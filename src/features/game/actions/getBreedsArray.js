import * as request from 'superagent'

export const SET_BREEDS_ARRAY = 'SET_BREEDS_ARRAY';

export function setDogs(breeds) {
    return {
        type: SET_BREEDS_ARRAY,
        payload: breeds
    }
}

/**
 * An action that returns a list of breeds along with their pictures
 */
export function getBreedsArray() {
    return function (dispatch) {
        request('https://dog.ceo/api/breeds/list/all')
            .then(response => Object.keys(response.body.message)
            )
            .then(breeds => {
                // Convert the breeds into a custom object array
                const customBreedArray = breeds.map((breed, index) => {
                    // Retrieve 10 pictues of the current breed
                    return request(`https://dog.ceo/api/breed/${breed}/images`)
                        .then(r => r.body.message)
                        .then(data => {
                            var size = 10;
                            var items = data.slice(0, size);
                            return {
                                id: index + 1,
                                name: breed,
                                imgUrls: items
                            }
                        });
                })
                // Wait until all promises resolve
                Promise.all(customBreedArray).then(r => {
                    dispatch(setDogs(r));
                });
            })
    }
}