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
        color,
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
        console.log(openNode)
        if (openNode.length) {
          return (openNode === algType) ? 'open-node' : 'inv-node'; 
        }
        return ''
    }

    function handleNodeToggle() {
        (openNode === algType)
            ? nodeToggle('')
            : nodeToggle(algType)
    }

    return (
        <div className={`${openNodeClass()} question-template ${color}`}>
            <h2 onClick={() => handleNodeToggle()}>{ title }</h2>
            <div className='q-form-container'>
                <form
                className='q-template-form' 
                onSubmit={event => handleSubmitInput(event)}>
                    <label htmlFor={`user-input-${title}`}>(n)</label>
                    <input type={inputType}
                    id={`user-input-${title}`}
                    name={`user-input-${title}`}
                    onClick={event => handleUserInput(event)}
                    onChange={event => handleUserInput(event)}
                    autocomplete='off'
                    />
                    <button className='answer-submit' type='submit'>Enter</button>
                </form>
            </div>
            <div className='answer-container'>
                { answers && <p className='answer'>{ answers[algType] }</p> }
            </div>
        </div>
    )
}

export default QuestionTemplate
