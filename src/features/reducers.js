import { combineReducers } from 'redux';
import landingPageReducer from './landing-page/landing-page.reducer';

import currentGameState from './current-game-state/game-state.reducer';
import dogBreedImages from './dog-breed-page/reducer';
import dogListReducer from './dog-list/dog-list.reducer'
import answered from './game/answerReducer.js'
import breeds from './game/game.reducer';
import currentGameData from './game/main-current-breeds.reducer';

// Export the combination of all the available
// reducers as a default export
export default combineReducers({
    // Add reducers here
    landingPageReducer,
    dogBreedImages,
    dogListReducer,
    answered,
    breeds,
    currentGameData,
    currentGameState
})