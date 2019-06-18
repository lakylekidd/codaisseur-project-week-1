import * as React from 'react'
import DogsList from './DogList'
import { connect } from 'react-redux'
import { getDogs } from '../actions/getDogs'

class DogListContainer extends React.Component {


    componentDidMount() {
        this.props.getDogs()
    }


    render() {
        console.log("WHAT ARE PASSED PROPS??", this.props.dogs)

        if (!this.props.dogs)
            return 'Loading...'
        return <DogsList dogs={this.props.dogs} />
    }
}
const mapStateToProps = (state) => {
    return {
        dogs: state.dogs
    }
}
export default connect(mapStateToProps, { getDogs: getDogs })(DogListContainer)

