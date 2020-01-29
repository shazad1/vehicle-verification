import {combineReducers} from 'redux';
import inputInfoReducer from './inputInfoReducer';


export default combineReducers({
    inputInfo: inputInfoReducer
});