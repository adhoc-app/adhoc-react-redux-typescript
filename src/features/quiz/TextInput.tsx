import { InputAdornment, TextField } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectCurrentAnswer } from "./answers/answerSlice";

type TextInputProps = {
  correctTextInput: boolean;
  questionIndex: number;
  selected: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({
  correctTextInput,
  selected,
  handleChange,
}: TextInputProps) => {
  const currentAnswer = useAppSelector(selectCurrentAnswer);

  return (
    <TextField
      id="textAnswer"
      label="Answer"
      variant="outlined"
      value={selected}
      onChange={handleChange}
      disabled={!!currentAnswer}
      InputProps={
        !!currentAnswer
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  {correctTextInput ? (
                    <CheckCircleIcon className="text-green-500" />
                  ) : (
                    <CancelIcon className="text-red-500" />
                  )}
                </InputAdornment>
              ),
            }
          : undefined
      }
    />
  );
};

export default TextInput;
