import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
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
  const [helperText, setHelperText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHelperText("Clicked");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{prompt}</FormLabel>
        <RadioGroup
          aria-label={`question${index}`}
          name={`question${index}`}
          value={selected}
          onChange={handleChange}
        >
          {options.map(({ value, label }) => (
            <FormControlLabel
              value={value.toString()}
              control={<Radio />}
              label={label}
            />
          ))}
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <div className="flex flex-col md:flex-row ">
          <Button
            id={`back_btn_${index}`}
            variant="text"
            color="default"
            // onClick={() => handleGoBack()}
          >
            Back
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Check Answer
          </Button>
          <Button id={`next_btn_${index}`} variant="outlined" color="secondary">
            Next
          </Button>
        </div>
      </FormControl>
    </form>
  );
}

export default QuestionForm;
