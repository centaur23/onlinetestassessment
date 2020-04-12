import React from 'react';
import Timer from './Timer'

function Quiz({
  questionId,
  question,
  answerOptions,
  counter,
  questionTotal,
  setPreviousQuestion,
  setNextQuestion,
  selectedAnswer,
  onAnswerSelected,
  viewreults,
}) {

  const renderAnswerOptions =(key,index) => {
    return (
      <li className="answerOption">
        <input 
          className="radioCustomButton"
          value={index}
          name="radioGroup"          
          type="radio"
          checked={(selectedAnswer === index)?true:false}
          onChange={onAnswerSelected} 
        />
        <label className="radioCustomLabel">{key.content}</label>
      </li>
    );
  }
  const onTimerOver = () => {
   console.log('timeOver');
   // TO_DO time Over move to results
   viewreults();
  }

  return (
    <div className="container"
      key={questionId} 
    >
      <div className="Timer-Holder">
        <Timer timeOver={onTimerOver}/>
      </div>
      <div className="questionCount">
        {`Question ${questionId} of ${questionTotal}`}
      </div>
      <div>
        <h2 className="question">{question}</h2>
      </div>
      <ul className="answerOptions">
        {answerOptions.map(renderAnswerOptions)}
      </ul>
      <div className="nxtPrevButtonHolder">
        {counter > 0 && <button className="Previous-btn" onClick={setPreviousQuestion}>Previous</button>}
        {counter < 4 && <button className="next-btn" onClick={setNextQuestion}>Next</button>}
      </div>
      <div className="submitButtonHolder">
        {questionId === questionTotal && <button className="Submit-btn" onClick={viewreults}> View Results </button>}
      </div>
    </div>
  );
}
export default Quiz;