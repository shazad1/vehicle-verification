import {GET_INPUT_INFO} from '../actions/types';
const initialState = {};



export default function(state = initialState, action) {
    switch(action.type) {

        case GET_INPUT_INFO:
            return ...state;
        default:
            return state;
    }
}