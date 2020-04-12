import React from 'react';

class Result extends React.Component {
  renderQuestions = () => {
    const{quizResult, answers} = this.props;
    return  quizResult.map((_data,index) =>{
        return <div 
          className="Result-Row">
          {_data.question}
          <br/>
          correct option: {_data.answerindex} : selected option {answers[index]+1 } { ((answers[index]+1) === _data.answerindex) && (<span className="status">its correct !man</span>)}</div>
    })
  }
  render (){
    return (
    <div  className="container">
      <div>
        <h2 className="Result-Header">Lets see your results!</h2>
        <div>{this.renderQuestions()}</div>
      </div>
    </div>
    )
  }
}

export default Result;