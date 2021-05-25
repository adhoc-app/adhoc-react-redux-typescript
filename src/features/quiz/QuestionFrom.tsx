import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useState } from "react";
import { Option } from "../../app/types";

type QuestionFormProps = {
  index: number | string;
  options: Option[];
  prompt: string;
};

function QuestionForm({ index, options, prompt }: QuestionFormProps) {
  const [selected, setSelected] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected((event.target as HTMLInputElement).value);
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{prompt}</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={selected}
        onChange={handleChange}
      >
        {options.map(({ value, label }) => (
          <FormControlLabel value={value} control={<Radio />} label={label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default QuestionForm;
