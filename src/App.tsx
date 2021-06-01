import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Quiz from "./features/quiz/Quiz";
import Results from "./features/quiz/results/Results";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route exact path="/results" component={Results} />
          <Route exact path="/" component={Quiz} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
