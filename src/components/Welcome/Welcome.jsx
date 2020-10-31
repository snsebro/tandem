import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Welcome.scss'

export default function Welcome() {

  useEffect(() => {
    localStorage.setItem('score', 0)

    if (localStorage.getItem('playAgain') > 0) {
      window.location.reload()
      localStorage.setItem('playAgain', 0)
    }
  }, [])

  return (
    <div className='tandem-div'>
      <h1>TANDEM TRIVIA</h1>
      <p>At Tandem, we love to learn and have fun and what better way to do that than to play a round of trivia. Playing trivia isn’t just a fun way to learn something new but also a great way to take a little break from a normal work task.</p>
      <Link to="/trivia"><button>Get Started</button></Link>
    </div>
  )
}

