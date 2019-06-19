import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {
    setGameState,
    IDLE_STATE,     // No game is currently running.
    START_STATE,    // Game welcome page showing
    RUNNING_STATE,  // Game logic running
    GAME_OVER_SATE  // Game over page showing with stats
} from './../../current-game-state/actions/setGameState';
import './Header.css';
import logo from './../../../media/logo.png';

class Header extends Component {

    startGame = (gameId) => {
        this.props.setGameState(START_STATE, gameId);
    }

    render() {
        return (
            <div className="header">
                <div id="logo" title="My Flash Cards App" data-root="true">
                    <img src={logo} className="logo" alt="logo" />
                    <h1>Dog Breeds of the World</h1>
                </div>
                <nav>
                    <div id="hamburger" className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className="nav-bar">
                        <li className="nav-item">
                            <Link to={`/breeds`}>Doglist</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => this.startGame(1)} to={'/game'}>Enter Game</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        gameState: store.currentGameState
    }
}
const mapDispatchToProps = {
    setGameState
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)