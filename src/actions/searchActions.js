import {SET_SEARCH_COUNTRY, GET_COUNTRY_RESULTS,LOADING} from './types';
import axios from 'axios'

const getTotalRecovered = (arrayOfStates) => {
	let totalRecovered = 0;
	arrayOfStates.forEach(state => {
		totalRecovered += state.recovered
	});

	return totalRecovered;
}

const getTotalDeaths = (arrayOfStates) => {
	let totalDeaths = 0;
	arrayOfStates.forEach(state => {
		totalDeaths += state.deaths
	});

	return totalDeaths;
}

const getTotalCases = (arrayOfStates) => {
	let totalCases = 0;
	arrayOfStates.forEach(state => {
		totalCases += state.confirmed
	});

	return totalCases;
}

export const setSearchCountry = (input) => (dispatch) => {
    dispatch({
        type: SET_SEARCH_COUNTRY,
        payload: input
    })
}

export const getCountryResults = (country) => (dispatch) => {
    let totalRecovered = 0;
    let totalDeaths = 0;
    let totalCases = 0;

    axios({
        "method":"GET",
        "url":"https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key":"548bff741cmsh0a0b5790c21f346p1a1484jsnd0c4993d4995"
        },"params":{
        "country": country
        }
        })
       .then((json) => {
           console.log(json.data.data.covid19Stats);
           totalRecovered = getTotalRecovered(json.data.data.covid19Stats);
           totalDeaths = getTotalDeaths(json.data.data.covid19Stats);
           totalCases = getTotalCases(json.data.data.covid19Stats);
           dispatch({
               type: GET_COUNTRY_RESULTS,
               payload: {
                  recovered: totalRecovered,
                  deaths: totalDeaths,
                  total: totalCases,
                  states: json.data.data.covid19Stats
               }
           })
       })
       .catch((err) => console.log(err))

      

}

export const setLoading = () => {
    return {
        type: LOADING
    }
}