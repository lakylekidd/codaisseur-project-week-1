import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    setGameState,
    IDLE_STATE,     // No game is currently running.
    RUNNING_STATE,    // Game welcome page showing
} from './../../current-game-state/actions/setGameState';
import ExitGameButton from './ExitGameButton';
import './Game1Welcome.css';


class Game1Welcome extends Component {
    /**
     * Set the game state to running
     */
    startGame = () => {
        this.props.question();
        this.props.setGameState(RUNNING_STATE, this.props.gameId);

    }

            render() {                    
        return (
            <div className="game-welcome-page">
                <h1>Welcome to Game {this.props.gameId}</h1>
                <p>
                    This mini-game is designed to test your skills
                    in recognizing all of the most famous dog breeds
                    from around the world
                </p>
                <h2>Instructions:</h2>
                    {
                        this.props.gameId === 1 &&
                        <ol>
                            <li>Click 'Start Game'</li>
                            <li>Choose the right breed based on the displayed image.</li>
                            <li>You can have a maximum of <b>n</b> wrong answers</li>
                            <li>Have fun!</li>
                        </ol>
                    }
                    {
                        this.props.gameId === 2 &&
                        <ol>
                            <li>Click 'Start Game'</li>
                            <li>Choose the right breed image based on the displayed breed name.</li>
                            <li>You can have a maximum of <b>n</b> wrong answers</li>
                            <li>Have fun!</li>
                        </ol>
                    }
                < button className="game-start" onClick={this.startGame} title="Click to start the game!">Start Game</button>
                <ExitGameButton />
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        gameId: reduxState.currentGameState.gameId
    }
}

const mapDispatchToProps = {
    setGameState
}     

export default connect(mapStateToProps, mapDispatchToProps)(Game1Welcome);