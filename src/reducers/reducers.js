import { INPUT, ANSWER } from '../actions/actions'

const initialState = {
    userInput: null,
    answers: {}
}

export function AlgorithmReducer(state = initialState, action) {

    switch(action.type) {
        case INPUT:
            return Object.assign({}, state, {
                userInput: action.num
            })
        case ANSWER:
            const algorithm = action.payload.algorithm

            return Object.assign({}, state, {
                answers: {
                    ...state.answers,
                    [algorithm]: action.payload.answer
                }
            })
        default:
            return state
    }
}

export default AlgorithmReducer