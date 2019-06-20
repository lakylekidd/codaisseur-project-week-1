import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    setGameState,
    IDLE_STATE,     // No game is currently running.
    START_STATE,    // Game welcome page showing
} from './../current-game-state/actions/setGameState';
import ExitGameButton from './../game/components/ExitGameButton';
import './GameOver.css';

/**
 * Page that displays as soon as any game is over
 */
class GameOver extends Component {
    /**
     * Set the game state to start
     */
    restartGame = () => {
        this.props.setGameState(START_STATE, this.props.currentGameState.gameId);
    }

    render() {
        // Retrieve the results from the game
        const results = {
            total: 24,
            wrong: 6,
            correct: 18,
            score: 0.28
        };
        const score = `${Math.floor(results.score * 100)}%`;

        return (
            <div className="game-over-page">
                <h1>Game Over</h1>
                <h2>Score: {score}</h2>
                <p>
                    <b>Sorry!</b> You scored {score}% in the game.
                    You can retry again or exit the game.
                </p>
                <button className="game-restart" onClick={this.restartGame} title="Click to re-start the game!">Restart Game</button>
                <ExitGameButton />
            </div>
        )
    }
}

const mapDispatchToProps = {
    setGameState
}
const mapStateToProps = (reduxState) => {
    return {
        currentGameState: reduxState.currentGameState
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
