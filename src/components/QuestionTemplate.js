import React from 'react'

function QuestionTemplate(props) {
    const {
        title,
        algorithm,
        input,
        inputValue,
        answer,
        answers
    } = props

    function handleUserInput(event) {
        console.log(event.target.value)
        if (input) input(event.target.value)
    }

    function handleSubmitInput(event) {
        event.preventDefault()

        if (algorithm && inputValue) {
            const value = algorithm(inputValue)
            const algType = title.toUpperCase()

            const questionAnswer = answer(value, algType)
        }
    }

    return (
        <div className='question-template'>
            <h2>{ title }</h2>
            <div className='q-form-container'>
                <form
                className='q-template-form' 
                onSubmit={event => handleSubmitInput(event)}>
                    <label htmlFor='user-input'>(n)</label>
                    <input type='text'
                    id='user-input'
                    name='user-input'
                    onClick={event => handleUserInput(event)}
                    onChange={event => handleUserInput(event)}
                    />
                </form>
            </div>
        </div>
    )
}

export default QuestionTemplate
