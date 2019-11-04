import React from 'react'

function QuestionTemplate(props) {
    const {
        title,
        algorithm,
        input
    } = props

    function handleUserInput(event) {
        console.log(event.target.value)
        if (input) input(event.target.value)
    }

    return (
        <div className='question-template'>
            <h2>{ title }</h2>
            <input type='text' 
            onClick={event => handleUserInput(event)}
            onChange={event => handleUserInput(event)} />
        </div>
    )
}

export default QuestionTemplate
