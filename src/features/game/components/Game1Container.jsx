import React, { Component } from 'react'
//import { connect } from 'react-redux';
import Game1 from './Game1';

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
            // Delay 2 seconds before rendering
            // setTimeout(() => {

            // }, 2000);
            return <Game1 main={main} guesses={guesses} answer={this.answer} />
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

// Export the connected component
export default Game1Container;