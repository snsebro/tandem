import "./App.css";
import QuestionContextProvider from "./context/QuestionContext";
import Welcome from "./components/Welcome/Welcome";
import { Route, Switch } from "react-router-dom";
import Trivia from "./components/Trivia/Trivia";

function App() {
  return (
    <QuestionContextProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/trivia" component={Trivia}/>
        </Switch>
      </div>
    </QuestionContextProvider>
  );
}

export default App;
