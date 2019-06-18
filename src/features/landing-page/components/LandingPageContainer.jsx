import React, { Component } from 'react'
import DogList from '../../dog-list/components/DogList';
import DogListContainer from '../../dog-list/components/DogListContainer';

export default class LandingPageContainer extends Component {
    render() {
        return (
            <div>
                <h1>The Landing Page</h1>
                <p>Landing Page works!</p>
                <DogList />
                <DogListContainer />
            </div>
        )
    }
}
