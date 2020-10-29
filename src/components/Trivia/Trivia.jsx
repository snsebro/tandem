import React, {useState, useContext, useEffect} from 'react'
import { QuestionContext } from '../../context/QuestionContext'
import ProgressBar from '../ProgressBar/ProgressBar'


export default function Trivia() {
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState([])
  const [randomAnswers, setRandomAnswers] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const questionList = useContext(QuestionContext)

  useEffect(() => {
    if (!questionList.questions[currentIndex]) {
      return
    }
    setQuestion(questionList.questions[currentIndex])
  }, [currentIndex])

  const nextQuestion = async () => {
    if (!questionList.questions[currentIndex]) {
      return
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
    let testAnswers = await [...question.incorrect, question.correct]
    setAnswers(randomOrder(testAnswers))
  }, [question])


  
  return (
    question ? 
      <div>
      <h1>TANDEM</h1>
        <ProgressBar completed={(currentIndex + 1)/10 * 100}/>
      
        <p>{question.question}</p>
        {answers.map(answer => <li>{answer}</li>)}
        {currentIndex < 9 ? <button onClick={nextQuestion}>Next Question</button> : <button>Score</button>}
    </div> : null
  )
}
