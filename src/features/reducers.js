import { combineReducers } from 'redux';
import landingPageReducer from './landing-page/landing-page.reducer';

// Export the combination of all the available
// reducers as a default export
export default combineReducers({
    // Add reducers here
    landingPageReducer
})