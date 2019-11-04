import React from 'react';
import QuestionTemplate from './components/QuestionTemplate'
import './App.css';
import './components/QuestionTemplate.css'
import questionData from './data/questionData'

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
        { questionData && questionData.map(data => {
          return <QuestionTemplate 
            title={data.title}
            algorithm={data.algorithm}
            input={userInput}
            inputValue={input}
            answer={answer}
            answers={answers}
          />
        }) }
      </section>
    </div>
  );
}

export default App;
