import { SET_DOG_BREED_IMAGES } from './actions/getBreed';

export default (state = [], action = {}) => {
    switch (action.type) {
        case SET_DOG_BREED_IMAGES:
            return action.payload;
        default:
            return state;
    }
}