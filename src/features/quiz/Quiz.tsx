import React from "react";
import { Question, QuestionType } from "../../app/types";
import Card from "./Card";

const mockQuestions: Question[] = [
  {
    prompt: "Con mèo trèo cây cau.",
    options: [
      { value: 0, label: "The cat climbs on a tall tree." },
      { value: 1, label: "The lion climbs on a areca tree." },
      { value: 2, label: "The cat climbs on a areca tree." },
      { value: 3, label: "The lion climbs on a tall tree." },
    ],
    type: "radio",
  },
];

function Quiz() {
  const questions = mockQuestions;
  return (
    <div className="flex h-screen justify-center items-center">
      {questions &&
        questions.map(({ prompt, options, type }, index) => (
          <Card
            key={index}
            prompt={prompt}
            options={options}
            index={index}
            type={type as QuestionType}
          />
        ))}
    </div>
  );
}

export default Quiz;
