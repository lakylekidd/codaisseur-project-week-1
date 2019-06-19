import React, { Component } from 'react'
import { connect } from 'tls';
import Game1 from './Game1';

class Game1Container extends Component {

    /**
     * Get an answer with the selected breed
     */
    answer = (breed) => {
        // Retrieve function from game container
        const { passAnswer: answer, main } = this.props;

        // Pass the answer to the game container
        this.passAnswer(breed.id);

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
            setTimeout(() => {
                return <Game1 main={main} guesses={guesses} answer={this.answer} />
            }, 2000);
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
export default connect()(Game1Container);