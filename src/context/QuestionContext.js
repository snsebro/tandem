import React, { createContext, useEffect, useState } from "react";
import questionsData from "../Apprentice_TandemFor400_Data.json";

export const QuestionContext = createContext();

const QuestionContextProvider = (props) => {
  const [index, setIndex] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    randomNumbers();
  }, []);

  useEffect(() => {
    const roundQuestions = [];
    index.map((number) => roundQuestions.push(questionsData[number]));
    setQuestions(roundQuestions)
  }, [index])

  const randomNumbers = () => {
    let max = 10;
    let randomNums = [];

    for (let i = 0; i < max; i++) {
      let temp = Math.floor(Math.random() * max);
      if (randomNums.indexOf(temp) == -1) {
        randomNums.push(temp);
      } else i--;
    }
    setIndex(randomNums);
  };

  return (
    <QuestionContext.Provider value={{ index, questions }}>
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
