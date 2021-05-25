import React from "react";
import { Option } from "../../app/types";
import QuestionForm from "./QuestionFrom";

type CardProps = {
  index: number;
  options: Option[];
  prompt: string;
};

function Card({ index, options, prompt }: CardProps) {
  return (
    <div key={index}>
      <QuestionForm options={options} prompt={prompt} />
    </div>
  );
}

export default Card;
