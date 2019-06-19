import { combineReducers } from 'redux';
import landingPageReducer from './landing-page/landing-page.reducer';

import dogBreedImages from './dog-breed-page/reducer';
import dogListReducer from './dog-list/dog-list.reducer'
import answer from './game/answerReducer.js'
import dogBreads from './game/dogBreadReducer'
import gameReducer from './game/game.reducer';

// Export the combination of all the available
// reducers as a default export
export default combineReducers({
    // Add reducers here
    landingPageReducer,
    dogBreedImages,
    dogListReducer,
    answer,
    dogBreads,
    gameReducer
})