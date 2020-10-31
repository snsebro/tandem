import "./App.css";
import QuestionContextProvider from "./context/QuestionContext";
import Welcome from "./components/Welcome/Welcome";
import { Route, Switch } from "react-router-dom";
import Trivia from "./components/Trivia/Trivia";
import Score from "./components/Score/Score";

function App() {
  return (
    <QuestionContextProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/trivia" component={Trivia} />
          <Route path="/score" component={Score} />
        </Switch>
      </div>
    </QuestionContextProvider>
  );
}

export default App;
