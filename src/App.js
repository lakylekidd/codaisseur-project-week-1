import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import './App.css';
import store from './store';

import LandingPageContainer from './features/landing-page/components/LandingPageContainer';
import DogBreedContainer from './features/dog-breed-page/components/DogBreedContainer';
import DogListContainer from './features/dog-list/components/DogListContainer'

import GameContainer from './features/game/components/GameContainer'
import Header from './features/header/components/Header';
import Footer from './features/footer/components/Footer';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <div className="App">
          <Route exact path='/' component={LandingPageContainer} />
          <Route exact path="/breeds/:id" component={DogBreedContainer} />
          <Route exact path="/breeds" component={DogListContainer} />
          <Route exact path="/game" component={GameContainer} />
        </div>
        <Footer />
      </Provider>
    );
  }
}

export default App;
