import React from "react";
import { Link } from "react-router-dom";
import "./Score.scss";

export default function Score() {
  let score = localStorage.getItem("score");

  return (
    <div className="score">
      <h1>TANDEM TRIVIA</h1>
      <p>You scored {score} out of 10 questions correctly</p>
      <Link to="/" onClick={() => localStorage.setItem("playAgain", 1)}>
        <button>Play Again?</button>
      </Link>
    </div>
  );
}
