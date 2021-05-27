import React from "react";
import Card from "./Card";

const mockQuestions = [
  {
    prompt: "Con mèo trèo cây cau.",
    options: [
      { value: 1, label: "The cat climbs on a tall tree." },
      { value: 2, label: "The lion climbs on a areca tree." },
      { value: 3, label: "The cat climbs on a areca tree." },
      { value: 4, label: "The lion climbs on a tall tree." },
    ],
  },
];

function Quiz() {
  const questions = mockQuestions;
  return (
    <div className="flex h-screen justify-center items-center">
      {questions &&
        questions.map(({ prompt, options }, index) => (
          <Card prompt={prompt} options={options} index={index} />
        ))}
    </div>
  );
}

export default Quiz;
