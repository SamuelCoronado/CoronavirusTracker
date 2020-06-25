import React, { Component } from 'react'
import StatesTable from './StatesTable';
import GeneralInfo from './GeneralInfo';
import {connect} from 'react-redux';


export class CoronavirusContainer extends Component {
    render() {

        if(this.props.states.length === 0) return null

        return(
           <div className="container"> 
                <div className="row my-5">
                    <GeneralInfo info={this.props.info}/>        
                </div>
                <div className="row my-5">
                    <StatesTable statesArray={this.props.states}/>
                </div>
            </div>
            )
        }
    }


const mapStateToProps = (state) => ({
    info: {
        country: state.coronavirus.country,
        totalCases: state.coronavirus.total,
        totalDeaths: state.coronavirus.deaths,
        recovered: state.coronavirus.recovered
    },
    states: state.coronavirus.states
});


export default connect(mapStateToProps)(CoronavirusContainer)
