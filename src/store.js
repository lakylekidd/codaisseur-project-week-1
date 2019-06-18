import { createStore } from 'redux';
import reducer from './reducers';

// Enable enhancer for Chrome Dev Tools for Redux
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

// Create the store
const store = createStore(reducer, enhancer);

// Export store as default
export default store;