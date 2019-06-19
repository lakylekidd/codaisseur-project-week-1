import React, { Component } from 'react'
import Game1Container from './Game1Container'
import { connect } from 'react-redux'
import { getBreedsArray } from './../actions/getBreedsArray';

class GameContainer extends Component {
    main = {
        id: 1,
        name: 'dog 1',
        img: 'https://cdn3.volusion.com/uarwc.hcckz/v/vspfiles/photos/90-441-2.jpg'
    }
    guesses = [
        {
            id: 2,
            name: 'dog 2',
            img: 'https://images.homedepot-static.com/productImages/de2f56f3-89e4-48cf-9209-256e290c3a71/svn/architectural-mailboxes-house-letters-numbers-3582b-2-64_1000.jpg'
        },
        {
            id: 3,
            name: 'dog 3',
            img: 'https://images.homedepot-static.com/productImages/26669ef9-b241-4074-9d52-aa50bf5a3e0c/svn/architectural-mailboxes-house-letters-numbers-3582b-3-64_1000.jpg'
        }
    ]

    answer = (id) => {
        let action = {
            type: 'ADD ANSER',
            payload: null
        }
        if (id === this.main.id) {
            action.payload = true
        } else {
            action.payload = false
        }
        this.props.dispatch(action)
    }

    componentDidMount() {
        this.props.getBreedsArray();
    }

    render() {
        return (
            <div>
                < Game1Container main={this.main} guesses={this.guesses} answer={this.answer} />
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        ansers: store.ansersReducer
    }
}
const mapActionToProps = {
    getBreedsArray: getBreedsArray
}

export default connect(mapStateToProps, mapActionToProps)(GameContainer)
