import { Button } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

const Homepage = () => {
  const history = useHistory();

  const handleStartNewQuiz = () => {
    history.push("/quiz");
  };

  return (
    <Router>
      <div className="flex flex-col h-screen justify-center items-center">
        <div>
          <Button
            onClick={handleStartNewQuiz}
            variant="contained"
            color="secondary"
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </Router>
  );
};

export default Homepage;
