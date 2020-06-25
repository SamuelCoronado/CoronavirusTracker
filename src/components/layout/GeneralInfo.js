import React from 'react'

export default function GeneralInfo(info) {

    if(!info){
        return(
        <div className="container">
            <h1 className="text-center">No info available</h1>
        </div>
        )
    }

    const {country, totalCases, totalDeaths, recovered} = info.info
    console.log(totalDeaths);
    
  
    return (
        <div className="container">
            <h1 className="text-center my-5">Coronavirus in {country}</h1>
            <h2 className="text-center bg-dark text-white ">{totalCases} total cases <i className="fas fa-procedures"></i></h2>
            <h2 className="text-center bg-dark text-white ">{recovered}  recoreved <i className="fas fa-plus-square"></i></h2>
            <hr/>
            {totalDeaths == '0'?(<h2 className="text-center text-white bg-success "> No deaths! <i class="fas fa-smile-beam"></i></h2>): (<h2 className="text-center text-white bg-danger ">{totalDeaths} total deaths <i class="fas fa-dizzy"></i></h2>)}
            
        </div>
    )
}
