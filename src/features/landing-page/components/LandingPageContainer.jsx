import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LandingPageContainer extends Component {
    render() {
        return (
            <div>
                <h1>The Landing Page</h1>
                <p>Landing Page works!</p>
                <Link to={`/breeds`}>Doglist</Link>
               
            </div>
        )
    }
}
