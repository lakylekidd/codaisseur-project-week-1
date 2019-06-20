import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    setGameState,
    START_STATE,    // Game welcome page showing
} from './../current-game-state/actions/setGameState';
import ExitGameButton from './../game/components/ExitGameButton';
import { clearCurrentGameData } from './../game/actions/clearCurrentGameData';
import './GameOver.css';

/**
 * Page that displays as soon as any game is over
 */
class GameOver extends Component {
    /**
     * Set the game state to start
     */
    restartGame = () => {
        this.props.clearCurrentGameData();
        this.props.setGameState(START_STATE, this.props.currentGameState.gameId);
    }

    render() {
        // Retrieve the results from the game state
        // Calculate the score in percent and show it as string
        const score = Math.floor(this.props.answers.score) + "%";
        // Return the rendered page
        return (
            <div className="game-over-page">
                <h1>Game Over</h1>
                <h2>Score: {score}</h2>
                <p>
                    <b>Sorry!</b> You scored {score} in the game.
                    You can retry again or exit the game.
                </p>
                <button className="game-restart" onClick={this.restartGame} title="Click to re-start the game!">Restart Game</button>
                <ExitGameButton />
            </div>
        )
    }
}

const mapDispatchToProps = {
    setGameState,
    clearCurrentGameData
}
const mapStateToProps = (reduxState) => {
    return {
        currentGameState: reduxState.currentGameState,
        answers: reduxState.answered
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GameOver);