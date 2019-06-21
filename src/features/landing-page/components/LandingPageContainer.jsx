import React, { Component } from 'react';
import GameStatsScreen from './../../game-stats/GameStatsScreen';

export default class LandingPageContainer extends Component {
    render() {
        return (
            <div>
                <GameStatsScreen />
                <h1>Dog Breeds of the World</h1>
                <p>Welcome to dog breeds of the world app.</p>
                <p>Use the following links to test your skills recognizing all the famous dog breeds.</p>
            </div>
        )
    }
}
