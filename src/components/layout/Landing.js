import React, { Component } from 'react'
import {connect} from 'react-redux';
import SearchForm from './SearchForm';
import CoronavirusContainer from './CoronavirusContainer';
import Loading from './Loading';

export class Landing extends Component {
    render() {

        const {loading} = this.props
        return (
            <div className="container">
                <SearchForm/>
                {loading? <Loading/>: <CoronavirusContainer />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.coronavirus.loading
})

export default connect(mapStateToProps)(Landing)
