import React, {Component} from 'react';
import {quizQuestions} from '../utilities/QuizDummyData';
import Quiz from '../commons/Quiz';
import Result from '../commons/Result';

class TestView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      questionList : [],
      answer: '',
      selectedAnswers : {},
      result: ''
    };
  }
  handleAnswerSelected = (e) => {
    console.log(e.target);
    const{selectedAnswers, counter} = this.state;
    var obj = selectedAnswers;
    var index = parseInt(e.target.value);
    console.log("for selected question number " + (counter + 1) +  " answer is " + index + " selected");
    var Qindex = counter;
    // create map and store all selected answers with quiz Questions
    obj[Qindex] = index;
    this.setState({selectedAnswers : obj})
  }
  componentWillMount() {
    this.setState({
      question: quizQuestions[0].question,
      answerOptions : quizQuestions[0].answers,
      questionList : quizQuestions
    });
  }
  setNextQuestion = () => {
    let{counter, questionId} = this.state;
    counter++;
    questionId++;
    this.setState({
      counter,
      questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: '',
    });
  }
  setPreviousQuestion = () => {
  let{counter, questionId} = this.state;
  counter--;
  questionId--;
  this.setState({
      counter,
      questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: '',
    });
  }
  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }
  setResults(result) {
    if (result.length === 1) {
        this.setState({ result: result[0] });
    } else {
        this.setState({ result: 'Undetermined' });
    }
  }
  renderQuiz() {
    const{
      counter,
      selectedAnswers,
      answerOptions,
      questionId,
      question
    } = this.state;
    return (
      <Quiz 
        questionId={questionId}
        question={question}
        answerOptions={answerOptions}
        selectedAnswer = {selectedAnswers[counter]}
        counter={counter}
        questionTotal={quizQuestions.length}
        viewreults={this.viewreults}
        setNextQuestion={this.setNextQuestion}
        setPreviousQuestion={this.setPreviousQuestion}
        onAnswerSelected = {this.handleAnswerSelected}
      />
    );
  }
  renderResult() {
    return (
      <Result 
          quizResult={this.state.questionList} 
          answers={this.state.selectedAnswers} 
      />
    );
  }
  viewreults = (e) => {
    this.setState({result : true})
  }
  render() {
    const{result}=this.state;
    return (
      <div className="App">
      <div className="App-header">
          <h2>Online Test Assignment</h2>
      </div>
          {result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}
export default TestView;