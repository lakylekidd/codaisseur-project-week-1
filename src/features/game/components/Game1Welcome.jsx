import React, { Component } from 'react';
import './Game1Welcome.css';

export default class Game1Welcome extends Component {
    render() {
        return (
            <div className="game-welcome-page">
                <h1>Welcome to Game 1</h1>
                <p>
                    This mini-game is designed to test your skills
                    in recognizing all of the most famous dog breeds
                    from around the world
                </p>
                <h2>Instructions:</h2>
                <ol>
                    <li>Click 'Start Game'</li>
                    <li>Choose the right breed based on the displayed image.</li>
                    <li>You can have a maximum of <b>n</b> wrong answers</li>
                    <li>Have fun!</li>
                </ol>
                <button>Start Game</button>
            </div>
        )
    }
}
