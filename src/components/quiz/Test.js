import React, { Component } from 'react';

import Quiz from './Quiz';
import Result from './Result';

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: this.props.quiz.questions[0] ? this.props.quiz.questions[0].body : '',
      answerOptions: [],
      answer: '',
      answersCount: 0,
      result: false,
      next: false,
      showAnswer: false,
      questions:[],
      end: false
    };
  }

  componentDidMount() {
    const questions = this.props.quiz.questions
    if(questions.as) {
      const shuffledAnswerOptions = questions.map((question) => this.shuffleArray(question.answers));
      this.setState({
        questions: questions,
        answerOptions: shuffledAnswerOptions[0] || null
      })
    } else {
      this.setState({
        questions: [],
        answerOptions: []
      })
    }
  }


  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleAnswerSelected = (event) => {
    this.setUserAnswer(event.currentTarget);

    if (this.state.questionId < this.state.questions.length) {
      setTimeout(() => this.showNextQuestionButton(), 200);
    } else {
      setTimeout(() => this.showResultButton(), 200);
    }
  }

  showNextQuestionButton () {
    this.setState({
      next: true
    })
  }

  setNextQuestion = () => {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.state.questions[counter].body,
      answerOptions: this.state.questions[counter].answers,
      answer: '',
      next: false,
      showAnswer: false
    })
  }

  setNextQuestion = () => {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.state.questions[counter].body,
      answerOptions: this.state.questions[counter].answers,
      answer: '',
      next: false,
      showAnswer: false
    })
  }

  showResultButton = () => {
    this.setState({ end: true})
  }

  setResults = () => {
    this.setState({
      result: true
    })
  }


  setUserAnswer(answer){
    const findAnswer = this.state.answerOptions.find((item) => item.body === answer.id)

    const right = findAnswer.right
    const answerId = answer.id
    console.log(findAnswer)


    if(right) {
      const updatedAnswersCount = this.state.answersCount + 1
      this.setState({
        answersCount: updatedAnswersCount
      })
    }

    this.setState({
      showAnswer: true,
      answer: answerId
    })
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={this.state.questions.length}
        onAnswerSelected={this.handleAnswerSelected}
        next={this.state.next}
        showAnswer={this.state.showAnswer}
        setNextQuestion={this.setNextQuestion}
        end={this.state.end}
        setResults={this.setResults}
      />
    );
  }

  renderResult() {
    return (
      <Result correctAnswers={this.state.answersCount} questionTotal={this.state.questions.length}/>
    );
  }

  render() {
    console.log(this.state)
    return (
      <div className="box">
        <h2>{this.props.quiz.title}</h2>

        <div>
          <div>
          {this.state.result ? this.renderResult() : this.renderQuiz()}
          </div>

        </div>
      </div>
    );
  }
}

export default Test
