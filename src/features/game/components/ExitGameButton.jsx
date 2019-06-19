import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    setGameState,
    IDLE_STATE     // No game is currently running.
} from './../../current-game-state/actions/setGameState';
import './ExitGameButton.css';

class ExitGameButton extends Component {
    exitGame = () => {
        this.props.setGameState(IDLE_STATE);
    }

    render() {
        return (
            <button className="exit-link-button"
                onClick={this.exitGame}
                title="Click to exit the game.">Exit game
            </button>
        )
    }
}

const mapDispatchToProps = {
    setGameState
}

export default connect(null, mapDispatchToProps)(ExitGameButton);
