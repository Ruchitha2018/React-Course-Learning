import { useEffect, useState } from 'react';
import QUESTIONS from '../questions.js'
import quizCompleteImg from '../assets/quiz-complete.png';

console.log('QUESTION TIMER');

const QuestionTimer = ({ timeout, onTimeout }) => {


 const [remainingTime, setRemaniningTime] = useState(timeout)

 useEffect(() => {
  console.log('SET TIMEOUT')
  const timer = setTimeout(onTimeout, timeout)
  return () => {
   clearTimeout(timer)
  }
 }, [onTimeout, timeout])

 useEffect(() => {
  console.log('SET INTERVAL')
  const interval = setInterval(() => {
   setRemaniningTime((prev) => prev - 100);
   console.log('TIME', remainingTime)
  }, 100)

  return () => {
   clearInterval(interval)
  }
 }, [])

 return (
  <>
   {remainingTime}
   <progress id="question-time" max={timeout} value={remainingTime} />

  </>
 )
}

export default QuestionTimer;