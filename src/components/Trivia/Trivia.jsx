import React, {useState, useContext, useEffect} from 'react'
import { QuestionContext } from '../../context/QuestionContext'
import ProgressBar from '../ProgressBar/ProgressBar'
import './Trivia.scss'
import { Link, Redirect } from 'react-router-dom'
import {randomOrder} from '../../random'

export default function Trivia() {
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [currentScore, setCurrentScore] = useState(0)
  const [submit, setSubmit] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const questionList = useContext(QuestionContext)

  useEffect(() => {
    if (!questionList.questions[currentIndex]) {
      return
    }
    setQuestion(questionList.questions[currentIndex])
    setSubmit(false)
  }, [currentIndex])

  useEffect(() => {
    if (question === '') {
      <Redirect to ="/"/>
    }
  }, [])
  
  const nextQuestion = () => {
    if (selectedAnswer === question.correct) {
      setCurrentScore(prevCurrentScore => prevCurrentScore + 1)
      localStorage.setItem('score', +localStorage.getItem('score') + 1)
    }
    if (!questionList.questions[currentIndex]) {
      return
    }
    setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1)
    setSelectedAnswer('')
  }

  const score = () => {
    if (selectedAnswer === question.correct) {
      setCurrentScore(prevCurrentScore => prevCurrentScore + 1)
      localStorage.setItem('score', +localStorage.getItem('score') + 1)
    }
  }
  
  useEffect(() => {
    async function updateAnswers() {
      if (question) {
        let randomAnswers = await randomOrder([...question.incorrect, question.correct])
      
        setAnswers(randomAnswers)
      }
    }
    updateAnswers()
  }, [question])

  return (
    question ? 
      <div className="trivia">
      <h1>TANDEM TRIVIA</h1>
        <ProgressBar completed={(currentIndex + 1)/10 * 100}/>
        <h3>{question.question}</h3>
        {answers.map((answer, idx) =>
          <p
            key={idx}
            className={`${selectedAnswer === answer && !submit ? 'selected' : 'answer'} 
                        ${answer === question.correct && submit ? 'correct' : 'incorrect'}`}
            onClick={() => setSelectedAnswer(answer)}>
            {answer}
          </p>
        )}
        {submit === false ? <button onClick={() => selectedAnswer && setSubmit(true)}>Submit</button> : null}
        {currentIndex < 9 && submit === true ? <button onClick={nextQuestion}>Next Question</button> : null}
        {currentIndex === 9 && submit ? <Link to='/score'><button onClick={score}>Score</button></Link> : null}
    </div> : null
  )
}
