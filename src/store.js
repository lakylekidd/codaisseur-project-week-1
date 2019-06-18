import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './features/reducers';
import ReduxThunk from 'redux-thunk'


// Enable enhancer for Chrome Dev Tools for Redux
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

const enhancer = compose(
    applyMiddleware(ReduxThunk),
    devTools
)

// Create the store
const store = createStore(reducer, enhancer);

// Export store as default
export default store;