import React from "react";
import QuestionForm, { QuestionFormProps } from "./QuestionForm";

type CardProps = QuestionFormProps;

function Card({
  index,
  options,
  prompt,
  type,
  handleGoBack,
  handleGoNext,
}: CardProps) {
  return (
    <div className="border w-full md:w-2/3" key={index}>
      <QuestionForm
        index={index}
        options={options}
        prompt={prompt}
        type={type}
        handleGoBack={handleGoBack}
        handleGoNext={handleGoNext}
      />
    </div>
  );
}

export default Card;
