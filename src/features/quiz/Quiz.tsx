import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { QuestionType } from "../../app/types";
import Card from "./Card";
import { selectQuestions } from "./questions/questionsSlice";

function Quiz() {
  const questions = useAppSelector(selectQuestions);
  const [questionIndex, setQuestionIndex] = useState(0);

  const handleGoBack = () => {
    setQuestionIndex(questionIndex - 1);
  };

  const handleGoNext = () => {
    setQuestionIndex(questionIndex + 1);
  };

  const renderQuestion = () => {
    const { prompt, options, type } = questions[questionIndex];
    return (
      <Card
        key={questionIndex}
        prompt={prompt}
        options={options}
        index={questionIndex}
        type={type as QuestionType}
        handleGoBack={handleGoBack}
        handleGoNext={handleGoNext}
      />
    );
  };

  return (
    <div className="flex h-screen justify-center items-center">
      {renderQuestion()}
    </div>
  );
}

export default Quiz;
