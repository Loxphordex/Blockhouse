import React from 'react';
import QuestionTemplate from './components/QuestionTemplate'
import './App.css';
import './components/QuestionTemplate.css'
import * as library from './functions/functions'

export const mapStateToProps = (state) => ({
  input: state.userInput
})

function App(props) {
  console.log(props)

  const {
    userInput
  } = props

  return (
    <div className="App">
      <section className='question-container'>
        <QuestionTemplate
          title='Fibonacci'
          algorithm={library.fibonacci}
          input={userInput}
        />
        <QuestionTemplate 
          input={userInput}
        />
        <QuestionTemplate />
        <QuestionTemplate />
        <QuestionTemplate />
      </section>
    </div>
  );
}

export default App;
