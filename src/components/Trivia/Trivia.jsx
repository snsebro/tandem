import React, {useState, useContext, useEffect} from 'react'
import { QuestionContext } from '../../context/QuestionContext'
import ProgressBar from '../ProgressBar/ProgressBar'
import './Trivia.scss'


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

  const nextQuestion = async () => {
    if (!questionList.questions[currentIndex]) {
      return
    }

    if (selectedAnswer == question.correct) {
      setCurrentScore(preCurrentScore => preCurrentScore + 1)
    }

    setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1)
  }

  const randomOrder = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }
  
  useEffect(async () => {
    if (question) {
      let testAnswers = await [...question.incorrect, question.correct]
      setAnswers(randomOrder(testAnswers))
    }
  }, [question])


  
  return (
    question ? 
      <div className="trivia">
      <h1>TANDEM</h1>
        <ProgressBar completed={(currentIndex + 1)/10 * 100}/>
      
        <h3>{question.question}</h3>
        {answers.map(answer =>
          <p
            className={`${selectedAnswer == answer && !submit ? 'selected' : 'answer'} ${answer == question.correct && submit ? 'correct' : 'incorrect'}`} onClick={() => setSelectedAnswer(answer)}>{answer}
          </p>)}
        <button onClick={() => setSubmit(true)}>Submit</button>
        {currentIndex < 9 ? <button onClick={nextQuestion}>Next Question</button> : <button>Score</button>}
    </div> : null
  )
}
