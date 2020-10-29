import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div>
      <h1>Tandem</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odit, atque distinctio consequuntur maxime, veritatis impedit accusantium veniam mollitia necessitatibus voluptas exercitationem itaque, id quaerat. Odio sequi vel harum vero!</p>
      <Link to="/trivia"><button>Get Started</button></Link>
    </div>
  )
}

