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

    const algType = title.toUpperCase()
    console.log(algType)
    console.log(answers[algType])

    function handleUserInput(event) {
        if (input) input(event.target.value)
    }

    function handleSubmitInput(event) {
        event.preventDefault()

        if (algorithm && inputValue) {
            const value = algorithm(inputValue)

            answer(value, algType)

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
                    <input type='number'
                    id='user-input'
                    name='user-input'
                    onClick={event => handleUserInput(event)}
                    onChange={event => handleUserInput(event)}
                    />
                    <button className='answer-submit' type='submit'>Enter</button>
                </form>
            </div>
            <div className='answer-container'>
                { answers && <div className='answer'>{ answers[algType] }</div> }
            </div>
        </div>
    )
}

export default QuestionTemplate
