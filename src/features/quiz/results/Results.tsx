import { Button } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { resetCount, selectCorrectAnswerCount } from "../answers/answerSlice";

const Results = () => {
  const dispatch = useAppDispatch();
  const correctAnswerCount = useAppSelector(selectCorrectAnswerCount);
  const history = useHistory();

  const handleStartNewQuiz = () => {
    history.push("/");
    dispatch(resetCount());
  };

  return (
    <Router>
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="flex flex-col">
          <h3>Quiz results</h3>
          <h4>You Scored: {correctAnswerCount}</h4>
        </div>
        <div>
          <Button
            onClick={handleStartNewQuiz}
            variant="contained"
            color="secondary"
          >
            Try a new Quiz!
          </Button>
        </div>
      </div>
    </Router>
  );
};

export default Results;
