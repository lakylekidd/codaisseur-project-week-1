import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import './App.css';
import store from './store';

import LandingPageContainer from './features/landing-page/components/LandingPageContainer';
import DogBreedContainer from './features/dog-breed-page/components/DogBreedContainer';
import DogListContainer from './features/dog-list/components/DogListContainer'

import GameContainer from './features/game/components/GameContainer'
import Game1Contener from './features/game-guess-bread-by-image/components/Game1Contener'
import Header from './features/header/components/Header';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <div className="App">
          <Route exact path='/' component={LandingPageContainer} />
          <Route exact path="/breeds/:id" component={DogBreedContainer} />
          <Route exact path="/breeds" component={DogListContainer} />
          <Route exact path="/game1" component={Game1Contener} />
          <Route exact path="/game" component={GameContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
