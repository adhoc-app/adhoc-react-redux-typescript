import { TextField } from "@material-ui/core";
import React from "react";

type TextInputProps = {
  selected: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({ selected, handleChange }: TextInputProps) => {
  return (
    <TextField
      id="textAnswer"
      label="Answer"
      variant="outlined"
      value={selected}
      onChange={handleChange}
    />
  );
};

export default TextInput;
