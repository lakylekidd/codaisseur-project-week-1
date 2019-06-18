import React, { Component } from 'react'
import DogListContainer from '../../dog-list/components/DogListContainer';
import { Route } from 'react-router-dom'


export default class LandingPageContainer extends Component {
    render() {
        return (
            <div>
                <h1>The Landing Page</h1>
                <p>Landing Page works!</p>
                <Route exact path="/breeds" component={DogListContainer} />
            </div>
        )
    }
}
