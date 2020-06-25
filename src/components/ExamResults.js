import React from 'react'
import {connect} from 'react-redux';
import Answer from './Answer'

function ExamResults({exam, result}) {
    console.log(result);
    
  
    if(Object.keys(result).length>0){
        return(
            <div className="container p-3">
                {exam.map((answer) => {
                    return(
                        <Answer answer={answer} />
                    )
                    })
                }
            </div>
        )
    }
    
    return(
        <div className="container">
            <h1 className="text-center">No info available</h1>
        </div>
    )
           
}

const mapStateToProps = (state) => ({
    exam: state.mathReducer.exam,
    result: state.mathReducer.result
})

export default connect(mapStateToProps)(ExamResults)



