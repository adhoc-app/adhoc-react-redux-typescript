import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";
import { Option } from "../../app/types";

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
  return (
    <RadioGroup
      aria-label={`question${questionIndex}`}
      name={`question${questionIndex}`}
      value={selected}
      onChange={handleChange}
    >
      {options.map(({ value, label }, index) => (
        <FormControlLabel
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
