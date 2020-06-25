import React from 'react'

export default function Answer({answer}) {
        
    if(answer.isCorrect){
        return(
            <div className="card bg-success text-white my-2 "> Correct! {answer.correctAnswer} </div>
        )
    }
    return(
        <div className="card bg-danger text-white my-2">Incorrect! Correct Answer: {answer.correctAnswer} </div>
    )
      
}
