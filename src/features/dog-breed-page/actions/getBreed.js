import * as request from 'superagent'

export const SET_DOG_BREED_IMAGES = 'SET_DOG_BREED_IMAGES';

export function setDogBreedImages(images) {
    return {
        type: SET_DOG_BREED_IMAGES,
        payload: images
    }
}

export function getDogBreeds(breed) {
    return function (dispatch) {
        request(`https://dog.ceo/api/breed/${breed}/images`)
            .then(r => r.body.message)
            .then(data => {
                var size = 10;
                var items = data.slice(0, size);
                dispatch(setDogBreedImages(items));
            });
    }
}