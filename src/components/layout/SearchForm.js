import React, { Component } from 'react'
import {setSearchCountry, getCountryResults,setLoading} from '../../actions/searchActions';
import {connect} from 'react-redux'

class SearchForm extends Component {

    onChange = (e) => {
        this.props.setSearchCountry(e.target.value);
    }

    onSubmit = (e) => { 
        e.preventDefault();
        this.props.setLoading();
        this.props.getCountryResults(this.props.country); 
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
            <div className="container">
              <h1 className="display-4 mb-3">
                <i className="fa fa-search" /> Search for a country
              </h1>
              <form id="searchForm" onSubmit={this.onSubmit}>
                <input
                  type="text"
                  className="form-control"
                  name="searchText"
                  placeholder="Country"
                  onChange = {this.onChange}
                  />
                <button type="submit" className="btn btn-primary btn-bg mt-3">
                  Search
                </button>
              </form>
            </div>
          </div>
        
        )
    }
}

const mapStateToProps = (state) => ({ //State refers to the global state object (store)
    country: state.coronavirus.country
})



export default connect(mapStateToProps, {setSearchCountry, getCountryResults, setLoading})(SearchForm)