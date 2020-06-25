import {SET_SEARCH_COUNTRY,GET_COUNTRY_RESULTS, LOADING } from '../actions/types';


const initialState = {
    country: '',
    total: '',
    deaths: '',
    recovered: '',
    states: [
        /* {
            province: "Ontario",
            country: "Canada",
            lastUpdate: "2020-03-16T16:13:26",
            confirmed: 177,
            deaths: 0,
            recovered: 5,
        },
        {
            province: "British Columbia",
            country: "Canada",
            lastUpdate: "2020-03-16T16:13:26",
            confirmed: 103,
            deaths: 4,
            recovered: 4,
        },
        {
            province: "Alberta",
            country: "Canada",
            lastUpdate: "2020-03-16T16:13:26",
            confirmed: 56,
            deaths: 0,
            recovered: 0,
        } */
    ],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_SEARCH_COUNTRY:
            return{
                ...state,
                country: action.payload,
            }
        case GET_COUNTRY_RESULTS:
            return{
                ...state,
                total: action.payload.total,
                deaths: action.payload.deaths,
                recovered: action.payload.recovered,
                states: action.payload.states,
                loading: false

            }
        case LOADING:
            return{
                ...state,
                loading: true
            }
        default:{
            return state;
        }
        }

    }
