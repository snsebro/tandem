import React, {useState, useContext, useEffect} from 'react'
import { QuestionContext } from '../../context/QuestionContext'
import ProgressBar from '../ProgressBar/ProgressBar'
import './Trivia.scss'
import { Link } from 'react-router-dom'
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
  
  const nextQuestion = () => {
    if (!questionList.questions[currentIndex]) {
      return
    }
    
    if (selectedAnswer === question.correct) {
      setCurrentScore(prevCurrentScore => prevCurrentScore + 1)
      localStorage.setItem('score', +localStorage.getItem('score') + 1)
    }
    
    setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1)
    setSelectedAnswer('')
  }

  // useEffect(() => {
  //   if (localStorage.getItem('score') !== undefined) { 
  //     setCurrentScore(localStorage.getItem('score'))
  //   }
  // }, [])
  
  useEffect(() => {
    async function updateAnswers() {
      if (question) {
        let testAnswers = await randomOrder([...question.incorrect, question.correct])
        
        setAnswers(testAnswers)
        
        localStorage.setItem('storedAnswers', JSON.stringify(testAnswers))
        localStorage.setItem('storedQuestion', JSON.stringify(question))
      }
    }
    updateAnswers()
  }, [question])

  let loadQuestion = question ? question : JSON.parse(localStorage.getItem('storedQuestion'))
  let loadAnswers = question ? answers : JSON.parse(localStorage.getItem('storedAnswers'))

  return (
    loadQuestion ? 
      <div className="trivia">
      <h1>TANDEM TRIVIA</h1>
        <ProgressBar completed={(currentIndex + 1)/10 * 100}/>
        <h3>{loadQuestion.question}</h3>
        {loadAnswers.map((answer, idx) =>
          <p
            key={idx}
            className={`${selectedAnswer === answer && !submit ? 'selected' : 'answer'} 
                        ${answer === loadQuestion.correct && submit ? 'correct' : 'incorrect'}`}
            onClick={() => setSelectedAnswer(answer)}>
            {answer}
          </p>
        )}
        {submit === false ? <button onClick={() => selectedAnswer && setSubmit(true)}>Submit</button> : null}
        {currentIndex < 9 && submit === true ? <button onClick={nextQuestion}>Next Question</button> : null}
        {currentIndex === 9 && submit ? <Link to='/score'><button>Score</button></Link> : null}
    </div> : null
  )
}
