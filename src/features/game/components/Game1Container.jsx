import React, { Component } from 'react'
//import { connect } from 'react-redux';
import Game1 from './Game1';
import Game2 from './Game2';
import { connect } from 'react-redux';

class Game1Container extends Component {

    /**
     * Get an answer with the selected breed
     */
    answer = (breed) => {
        // Retrieve function from game container
        const passAnswer = this.props.answer;
        const { main } = this.props;

        // Pass the answer to the game container
        passAnswer(breed);

        // Check if the answer was correct
        if (breed.id === main.id) {
            // Answer was correct
            return true;
        } else {
            return false;
        }
    }

    renderGame() {

        // Retrieve current game breeds
        const { main, guesses } = this.props;
        // Check if props are passed in
        if (main && guesses) {
            // select the coreect game
            switch (this.props.gameId) {
                case 1:
                    return <Game1 main={main} guesses={guesses} answer={this.answer} />
                case 2 :
                    return <Game2 main={main} guesses={guesses} answer={this.answer} />
                case 3 :
                    if (Math.round(Math.random())) {
                        return <Game1 main={main} guesses={guesses} answer={this.answer} />
                    } else {
                        return <Game2 main={main} guesses={guesses} answer={this.answer} />
                    }
                default:
                    return <span>I don't know this game</span>
            }
        } else {
            return (
                <div>
                    Loading game...
                </div>
            )
        }
    }


    render() {
        return this.renderGame();
    }
}

// map gameId to props
const mapStateToProps = (store) => {
    return {
        gameId: store.currentGameState.gameId
    }
}
export default connect(mapStateToProps)(Game1Container)