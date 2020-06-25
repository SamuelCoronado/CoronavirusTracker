import {combineReducers} from 'redux';
import searchReducer from './searchReducer'
import mathReducer from './mathReducer'

export default combineReducers({
    coronavirus: searchReducer,
    mathReducer
})