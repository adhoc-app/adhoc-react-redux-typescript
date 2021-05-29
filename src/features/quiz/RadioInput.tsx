import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";
import { useAppSelector } from "../../app/hooks";
import { Option } from "../../app/types";
import { selectCurrentAnswer } from "./answers/answerSlice";

type RadioInputProps = {
  questionIndex: number;
  selected: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: Option[];
};
const RadioInput = ({
  questionIndex,
  selected,
  handleChange,
  options,
}: RadioInputProps) => {
  const currentAnswer = useAppSelector(selectCurrentAnswer);

  return (
    <RadioGroup
      aria-label={`question${questionIndex}`}
      name={`question${questionIndex}`}
      value={selected}
      onChange={handleChange}
    >
      {options.map(({ value, label }, index) => (
        <FormControlLabel
          className={
            currentAnswer
              ? index === currentAnswer
                ? "text-green-600"
                : index.toString() === selected
                ? "text-red-600"
                : ""
              : ""
          }
          key={index}
          value={value.toString()}
          control={<Radio />}
          label={label}
        />
      ))}
    </RadioGroup>
  );
};

export default RadioInput;
