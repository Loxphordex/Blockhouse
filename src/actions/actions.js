export const INPUT = 'INPUT'
export const ANSWER = 'ANSWER'
export const TOGGLE_EXPAND = 'TOGGLE_EXPAND'

export function addInput(num) {
    return {
        type: INPUT,
        num
    }
}

export function addAnswer(num, algorithm) {
    return {
        type: ANSWER,
        payload: {
            answer: num,
            algorithm
        }
    }
}

export function toggleExpand(title) {
    return {
        type: TOGGLE_EXPAND,
        payload: {
            title
        }
    }
}