

const initialState = {
    timer: 10,
    exam: [
        {   
            predicate: 'Cuanto es 2+3?',
            correctAnswer: 5,
            answers: [
                 8,
                 6,
                 5,
            ],
            isCorrect: false,
            userAnswer: null
        },
        {
            predicate: 'Cuanto es 2+5?',
            correctAnswer: 7,
            answers: [ 
                 7,
                 4,
                 2,
            ],
            isCorrect: false,
            userAnswer: null
        },
        {
            predicate: 'Cuanto es 5+5?',
            correctAnswer: 10,
            answers: [
                 8,
                 6,
                 10
            ],
            isCorrect: false,
            userAnswer: null
        },
        {
            predicate: 'Cuanto es 6+6?',
            correctAnswer: 12,
            answers: [
                 12,
                 6,
                5
            ],
            isCorrect: false,
            userAnswer: null
        },
        {
            predicate: 'Cuanto es 8+1?',
            correctAnswer: 9,
            answers: [
                 3,
                 9,
                 4
            ],
            isCorrect: false,
            userAnswer: null
        }

    ],
    result: {},
    questionNumber: 0
}

export default function(state = initialState, action){
    console.log(action.type);
    
    switch(action.type){
        case 'CHECK_ANSWER':
            const tempExam = [...state.exam];
            tempExam.map((question) => {
                if(question !== tempExam[state.questionNumber]){
                    return question
                }
                question.isCorrect = action.payload.isCorrect
                question.userAnswer = action.payload.userAnswer
                return question
            });
            return{
                ...state,
                exam:tempExam
            }
        case 'GO_TO_NEXT_QUESTION':
                return{
                    ...state,
                    questionNumber : state.questionNumber+1
            
                }
        case 'GET_TEST_RESULTS':
            return{
                ...state,
                result: action.payload
            }
        default:
            return state
    }
}