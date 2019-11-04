export const INPUT = 'INPUT'
export const ANSWER = 'ANSWER'
export const FIBONACCI = 'FIBONACCI'

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