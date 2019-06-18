import React, { Component } from 'react'
import DogList from '../../dog-list/components/DogList';

export default class LandingPageContainer extends Component {
    render() {
        return (
            <div>
                <h1>The Landing Page</h1>
                <p>Landing Page works!</p>
                <DogList />
            </div>
        )
    }
}
