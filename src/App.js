import React from 'react';
import QuestionTemplate from './components/QuestionTemplate'
import './App.css';
import './components/QuestionTemplate.css'
import * as library from './functions/functions'

export const mapStateToProps = (state) => ({
  input: state.userInput,
  answers: state.answers
})

function App(props) {

  const {
    input,
    userInput,
    answer,
    answers
  } = props

  return (
    <div className="App">
      <section className='question-container'>
        <QuestionTemplate
          title='Fibonacci'
          algorithm={library.fibonacci}
          input={userInput}
          inputValue={input}
          answer={answer}
          answers={answers}
        />
      </section>
    </div>
  );
}

export default App;
