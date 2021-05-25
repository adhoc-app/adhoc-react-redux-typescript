import React from "react";
import Card from "./Card";

const mockQuestions = [
  {
    prompt: "ăn cơm",
    options: [
      { value: 1, label: "sleep" },
      { value: 1, label: "write" },
      { value: 1, label: "eat" },
      { value: 1, label: "work" },
    ],
  },
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
    <>
      {questions &&
        questions.map(({ prompt, options }, index) => (
          <Card prompt={prompt} options={options} index={index} />
        ))}
    </>
  );
}

export default Quiz;
