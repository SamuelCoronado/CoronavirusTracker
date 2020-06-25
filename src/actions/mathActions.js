

export const updateTimerInterval = (time) => (dispatch) => {
  
             dispatch({
                type: 'UPDATE_TIMER',
                payload: time-1
            })
         
}

export const checkAnswer = (userAnswer, correctAnswer) => (dispatch) => {
    console.log(userAnswer);
    
    dispatch({
        type: 'CHECK_ANSWER',
        payload:{
            isCorrect:parseInt(userAnswer) === correctAnswer,
            userAnswer: parseInt(userAnswer)   
        } 
    })
}

export const goToNextCuestion = () => (dispatch) => {
    dispatch({
        type: 'GO_TO_NEXT_QUESTION'
    })
}

export const getResults = (exam) => (dispatch) => {
    console.log('ira we si me ejecuto');
    
    let correctAnswers = 0;

    exam.forEach((question) => {
        if(question.isCorrect){
            correctAnswers +=1;
        }
    });

    const grade = correctAnswers/exam.length*10

    const result ={
        correctAnswers,
        incorrectAnswers: (exam.length - correctAnswers),
        grade
    }

   

    dispatch({
        type: 'GET_TEST_RESULTS',
        payload: result
    })

}