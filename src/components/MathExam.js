import React, { Component } from 'react'
import {checkAnswer,goToNextCuestion, getResults} from '../actions/mathActions'
import {connect} from 'react-redux';

 class MathExam extends Component {


    onChange = (e) => {
        this.props.checkAnswer(e.target.value, this.props.exam[this.props.questionNumber].correctAnswer)
        e.target.value = ''     
    }

    onClick = () => {
        this.props.goToNextCuestion()
    }

    obtenerResultados = () =>{
        this.props.getResults(this.props.exam)
    }

    render() {

        const {exam, questionNumber} = this.props
        const currentQuestion = exam[questionNumber];
     
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <p className="card-text text-center">
                            {currentQuestion.predicate}
                        </p>
                        <ul>
                            {currentQuestion.answers.map((answer) => {
                                return(
                                    <>
                                       
                                        <input type="radio" value={answer} onClick= {this.onChange} name="answer" /> {answer}
                                        <br/>
                                    </>
                                )
                            } )}
 
                        </ul>

                        {
                            currentQuestion === exam[exam.length-1]?(<button onClick={this.obtenerResultados} className="btn btn-success btn-block">Finish Test</button>):(<button onClick={this.onClick} className="btn btn-block btn-primary">Next question</button>)
                        }
                       
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    exam: state.mathReducer.exam,
    questionNumber: state.mathReducer.questionNumber
})

export default connect(mapStateToProps, {checkAnswer, goToNextCuestion, getResults})(MathExam)