import { SET_BREEDS_ARRAY } from './actions/getBreedsArray';

export default (state = [], action = {}) => {
    switch (action.type) {
        case SET_BREEDS_ARRAY:
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state
    }
}