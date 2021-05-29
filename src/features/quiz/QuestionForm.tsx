import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
} from "@material-ui/core";
import React, { useState } from "react";
import { Option, QuestionType } from "../../app/types";
import RadioInput from "./RadioInput";
import TextInput from "./TextInput";

type QuestionFormProps = {
  index: number;
  options: Option[];
  prompt: string;
  type: QuestionType;
};

function QuestionForm({ index, options, prompt, type }: QuestionFormProps) {
  const [selected, setSelected] = useState("");
  const [helperText, setHelperText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHelperText("Clicked");
  };

  const renderOptions = () => {
    if (type === "radio") {
      return (
        <RadioInput
          questionIndex={index}
          selected={selected}
          handleChange={handleChange}
          options={options}
        />
      );
    }
    if (type === "text") {
      return <TextInput selected={selected} handleChange={handleChange} />;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{prompt}</FormLabel>
        {renderOptions()}
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
