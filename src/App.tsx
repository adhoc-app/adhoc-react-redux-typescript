import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./features/quiz/Header";
import Homepage from "./features/quiz/Homepage";
import Loginpage from "./features/quiz/Loginpage";
import Quiz from "./features/quiz/Quiz";
import Results from "./features/quiz/results/Results";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/login" component={Loginpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
