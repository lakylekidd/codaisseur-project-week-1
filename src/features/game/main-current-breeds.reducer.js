import { SET_MAIN_BREED } from './actions/setMainBreed';
import { SET_GUESS_BREEDS } from './actions/setGuessBreeds';

const initialState = {
    main: {
        id: 45,
        name: 'Space dog',
        img: 'https://cdn3.volusion.com/uarwc.hcckz/v/vspfiles/photos/90-441-2.jpg'
    },
    guesses: [
        {
            id: 2,
            name: 'Billy Dog',
            img: 'https://images.homedepot-static.com/productImages/de2f56f3-89e4-48cf-9209-256e290c3a71/svn/architectural-mailboxes-house-letters-numbers-3582b-2-64_1000.jpg'
        },
        {
            id: 3,
            name: 'Walapalupa',
            img: 'https://images.homedepot-static.com/productImages/26669ef9-b241-4074-9d52-aa50bf5a3e0c/svn/architectural-mailboxes-house-letters-numbers-3582b-3-64_1000.jpg'
        }
    ]
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_GUESS_BREEDS:
            return {
                ...state,
                guesses: action.payload
            }
        case SET_MAIN_BREED:
            return {
                ...state,
                main: action.payload,
            };
        default:
            return state
    }
}

// const inti = {
//     main: {},
//     guesses: []
// }