import { Button, FormControl, FormLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Option, QuestionType } from "../../app/types";
import {
  getAnswer,
  resetCorrectAnswer,
  selectCurrentAnswer,
} from "./answers/answerSlice";
import { selectQuestions } from "./questions/questionsSlice";
import RadioInput from "./RadioInput";
import TextInput from "./TextInput";

export type QuestionFormProps = {
  index: number;
  options?: Option[];
  prompt: string;
  type: QuestionType;
  handleGoBack: (event: React.MouseEvent<HTMLElement>) => void;
  handleGoNext: (event: React.MouseEvent<HTMLElement>) => void;
};

function QuestionForm({
  index,
  options,
  prompt,
  type,
  handleGoBack,
  handleGoNext,
}: QuestionFormProps) {
  const currentAnswer = useAppSelector(selectCurrentAnswer);
  const questions = useAppSelector(selectQuestions);
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected("");
    dispatch(resetCorrectAnswer());
  }, [index, dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getAnswer(index));
  };

  const renderOptions = () => {
    switch (type) {
      case "radio":
        return (
          <RadioInput
            questionIndex={index}
            selected={selected}
            handleChange={handleChange}
            options={options!}
          />
        );
      case "text":
        return <TextInput selected={selected} handleChange={handleChange} />;
      default:
        return <p>Mammamia!</p>;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{prompt}</FormLabel>
        {renderOptions()}
        <div className="flex flex-col md:flex-row ">
          {/* <Button
            id={`back_btn_${index}`}
            variant="outlined"
            color="default"
            disabled={index === 0}
            onClick={(event) => handleGoBack(event)}
          >
            Back
          </Button> */}
          <Button type="submit" variant="contained" color="primary">
            Check Answer
          </Button>
          <Button
            id={`next_btn_${index}`}
            variant="outlined"
            color="default"
            disabled={
              index === questions.length - 1 || !selected || !currentAnswer
            }
            onClick={(event) => handleGoNext(event)}
          >
            Next
          </Button>
        </div>
      </FormControl>
    </form>
  );
}

export default QuestionForm;
