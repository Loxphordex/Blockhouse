import { INPUT, ANSWER, TOGGLE_EXPAND } from '../actions/actions'

const initialState = {
    userInput: null,
    answers: {},
    openNode: '',
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
        case TOGGLE_EXPAND:
            return Object.assign({}, state, {
                openNode: action.payload.title
            })
        default:
            return state
    }
}

export default AlgorithmReducer