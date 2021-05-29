import React from "react";
import { Option, QuestionType } from "../../app/types";
import QuestionForm from "./QuestionForm";

type CardProps = {
  index: number;
  options: Option[];
  prompt: string;
  type: QuestionType;
};

function Card({ index, options, prompt, type }: CardProps) {
  return (
    <div className="border w-full md:w-2/3" key={index}>
      <QuestionForm
        index={index}
        options={options}
        prompt={prompt}
        type={type}
      />
    </div>
  );
}

export default Card;
