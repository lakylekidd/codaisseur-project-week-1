import { SET_BREEDS_ARRAY } from './actions/getBreedsArray';

export default (state = [], action = {}) => {
    switch (action.type) {
        case SET_BREEDS_ARRAY:
            console.log(action.payload);
            return state;
        default:
            return state
    }
}