import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GameStatsScreen.css';

class GameStatsScreen extends Component {

    getDifficultLevelStars(level) {
        switch (level) {
            case 0:
                return <span role="img" aria-label="Easy Level">👶</span>
            case 1:
                return <span role="img" aria-label="Medium Level">😎</span>
            case 2:
                return <span role="img" aria-label="Hard Level">😈</span>
            default:
                break;
        }
    }

    getLives(lives) {
        const lifeEmojis = [];
        //const allowedWrongAnswers = this.props.stats.allowedWrongAnswers;
        for (let i = 0; i < this.props.stats.allowedWrongAnswers; i++) {
            if (lives > i) {
                lifeEmojis.push(
                    <span key={i} role="img" aria-label="Available Life">❤️</span>
                );
            } else {
                lifeEmojis.push(
                    <span role="img" className="broken-heart" aria-label="Lost Life">💔️</span>
                );
            }

        }
        return lifeEmojis;
    }


    render() {
        // Rerieve needed values
        const { score, allowedWrongAnswers, mistakes, difficultyLevel } = this.props.stats;
        const livesLeft = allowedWrongAnswers - mistakes;
        // Render the page
        return (
            <div className="game-stats-container">
                <div className="lives">
                    {
                        this.getLives(livesLeft)
                    }
                </div>
                <div className="score">

                    <div className="difficulty-level">
                        {
                            this.getDifficultLevelStars(difficultyLevel)
                        }
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