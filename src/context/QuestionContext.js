import React, { createContext, useEffect, useState } from "react";
import questionsData from "../Apprentice_TandemFor400_Data.json";
import {randomNumbers} from '../random'

export const QuestionContext = createContext();

const QuestionContextProvider = (props) => {
  const [index, setIndex] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setIndex(randomNumbers());
  }, []);

  useEffect(() => {
    const roundQuestions = [];
    randomNumbers().map((number) => roundQuestions.push(questionsData[number]));
    setQuestions(roundQuestions)
  }, [])
  

  return (
    <QuestionContext.Provider value={{ index, questions }}>
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
