import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GameStatsScreen.css';

class GameStatsScreen extends Component {

    getDifficultLevelStars(level) {
        // Create an array of level
        const levels = new Array(level);
        return (
            levels.map(x => <li>img</li>)
        )
    }


    render() {
        // Rerieve needed values
        const { score, allowedWrongAnswers, mistakes, difficultyLevel } = this.props.stats;
        // Render the page
        return (
            <div className="game-stats-container">
                <div className="lives">
                    lives
                </div>
                <div className="score">

                    <div className="difficulty-level">
                        <ul>
                            {
                                this.getDifficultLevelStars(difficultyLevel)
                            }
                        </ul>
                    </div>

                    <div className="score-result">
                        Score: <span>{Math.floor(score)}%</span>
                    </div>
                </div>
            </div>
        )
    }
}

// Map the required state to props
const mapStateToProps = (reduxState) => {
    return {
        stats: reduxState.answered
    }
}

// Export the connected component
export default connect(mapStateToProps)(GameStatsScreen)