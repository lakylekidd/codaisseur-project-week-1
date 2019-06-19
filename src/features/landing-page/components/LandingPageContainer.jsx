import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LandingPageContainer extends Component {
    render() {
        return (
            <div>
                <h1>Dog Breeds of the World</h1>
                <p>Welcome to dog breeds of the world app.</p>
                <p>Use the following links to test your skills recognizing all the famous dog breeds.</p>
                <Link to={`/breeds`}>Doglist</Link>
                <br />
                <Link to={'/game'}>Enter Game</Link>
            </div>
        )
    }
}
