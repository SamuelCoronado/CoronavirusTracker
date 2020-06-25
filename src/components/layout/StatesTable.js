import React from "react";

export default function StatesTable(statesArray) {

  const statesData = statesArray.statesArray.map((state) => {
    return(
      <tr>
            <th scope="row">{state.province}</th>
            <td>{state.confirmed}</td>
            <td>{state.recovered}</td>
            <td>{state.deaths}</td>    
      </tr>
  )
  })

  console.log(statesArray.statesArray);

      return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">State</th>
          <th scope="col">Confirmed</th>
          <th scope="col">Recovered</th>
          <th scope="col">Deaths</th>
        </tr>
      </thead>
      <tbody>
          {statesData.length === 1? (<h1 className="text-center">No individual states data available</h1>): (statesData)}
      </tbody>
    </table>
  )
}
