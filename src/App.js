import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import './App.css';
import store from './store';

import LandingPageContainer from './features/landing-page/components/LandingPageContainer';
import DogListContainer from './features/dog-list/components/DogListContainer'


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <LandingPageContainer />
          <Route exact path="/breeds" component={DogListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
