import React, { createContext, useEffect, useState } from "react";
import questionsData from "../Apprentice_TandemFor400_Data.json";
import { randomNumbers } from "../random";

export const QuestionContext = createContext();

const QuestionContextProvider = (props) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const roundQuestions = [];
    randomNumbers().map((number) => roundQuestions.push(questionsData[number]));
    setQuestions(roundQuestions);
  }, []);

  return (
    <QuestionContext.Provider value={{ questions }}>
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
