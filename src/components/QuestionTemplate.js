import React from 'react'

function QuestionTemplate(props) {
    const {
        title,
        algorithm,
        input,
        inputValue,
        answer,
        answers,
        inputType,
        openNode,
        nodeToggle,
    } = props

    const algType = title.toUpperCase()

    function handleUserInput(event) {
        if (input) input(event.target.value)
    }

    function handleSubmitInput(event) {
        event.preventDefault()

        if (algorithm && inputValue) {
            const value = algorithm(inputValue)

            answer(value, algType)
            input('')

        }
    }

    function openNodeClass() {
        return (openNode === algType) ? 'open-node' : ''; 
    }

    function handleNodeToggle() {
        (openNode === algType)
            ? nodeToggle('')
            : nodeToggle(algType)
    }

    return (
        <div className={`${openNodeClass()} question-template`}>
            <h2 onClick={() => handleNodeToggle()}>{ title }</h2>
            <div className='q-form-container'>
                <form
                className='q-template-form' 
                onSubmit={event => handleSubmitInput(event)}>
                    <label htmlFor='user-input'>(n)</label>
                    <input type={inputType}
                    id='user-input'
                    name='user-input'
                    onClick={event => handleUserInput(event)}
                    onChange={event => handleUserInput(event)}
                    autocomplete='off'
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
