import { combineReducers } from 'redux'
import { AlgorithmReducer } from '../reducers/reducers'
import { addInput } from '../actions/actions'

export const rootReducer = combineReducers({
    AlgorithmReducer
})

export const mapDispatchToProps = (dispatch) => {
    return {
        userInput(num) {
            dispatch(addInput(num))
        }
    }
}