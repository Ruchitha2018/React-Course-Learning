import { useState } from 'react';
import QUESTIONS from '../questions.js'
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';

const Quiz = () => {
 const [userAnswers, setUserAnswers] = useState([])

 const activeQuestionIndex = userAnswers.length;

 const handleSelectAnswer = (answer) => {
  setUserAnswers((prevAns) => [...prevAns, answer])
 }

 const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

 if (quizIsComplete) {
  return (
   <div id="summary">
    <img src={quizCompleteImg} alt="Trophy icon" />
    <h2>Quiz Completed!</h2>
   </div>
  );

 }

 const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
 console.log(shuffledAnswers);
 shuffledAnswers.sort(() => Math.random() - 0.5);

 return (
  <div id="quiz">
   <div id="question">
    <QuestionTimer key={activeQuestionIndex} onTimeout={() => handleSelectAnswer(null)}    timeout={10000}/>
    <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
    <ul id="answers">
     {JSON.stringify(userAnswers)}
     {shuffledAnswers.map((answer) => (
      <li className="answer">
       <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
      </li>
     ))}
    </ul>
   </div>
  </div>
 )
}

export default Quiz;