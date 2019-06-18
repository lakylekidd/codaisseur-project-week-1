import * as React from 'react'
import DogsList from './DogList'
import { connect } from 'react-redux'
import { getDogs } from '../actions/getDogs'
import  './DogList.css'

class DogListContainer extends React.Component {

    componentDidMount() {
        this.props.getDogs()
    }

    render() {
        if (!this.props.dogs)
            return 'Loading...'
        return <DogsList dogs={this.props.dogs} />
    }
}

const mapStateToProps = (state) => {
    return {
        dogs: state.dogListReducer
    }
}
export default connect(mapStateToProps, { getDogs: getDogs })(DogListContainer)

