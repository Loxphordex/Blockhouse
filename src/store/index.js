import { combineReducers } from 'redux'
import { AlgorithmReducer } from '../reducers/reducers'
import { addInput, addAnswer, toggleExpand } from '../actions/actions'

export const rootReducer = combineReducers({
    AlgorithmReducer
})

export const mapDispatchToProps = (dispatch) => {
    return {
        userInput(num) {
            dispatch(addInput(num))
        },

        answer(num, algorithm) {
            dispatch(addAnswer(num, algorithm))
        },

        nodeToggle(title) {
            dispatch(toggleExpand(title))
        },
    }
}