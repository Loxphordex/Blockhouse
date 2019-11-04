import { INPUT } from '../actions/actions'
import { stat } from 'fs'

const initialState = {
    userInput: null,
}

export function AlgorithmReducer(state = initialState, action) {

    switch(action.type) {
        case INPUT:
            return Object.assign({}, state, {
                userInput: action.num
            })
        default:
            return state
    }
}

export default AlgorithmReducer