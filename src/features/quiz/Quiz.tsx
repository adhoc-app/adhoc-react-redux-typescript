import React from "react";
import { Question, QuestionType } from "../../app/types";
import Card from "./Card";

const mockQuestions: Question[] = [
  {
    prompt: "Con mèo trèo cây cau.",
    options: [
      { value: 1, label: "The cat climbs on a tall tree." },
      { value: 2, label: "The lion climbs on a areca tree." },
      { value: 3, label: "The cat climbs on a areca tree." },
      { value: 4, label: "The lion climbs on a tall tree." },
    ],
    type: "text",
  },
];

function Quiz() {
  const questions = mockQuestions;
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
