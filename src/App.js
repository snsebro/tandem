import "./App.css";
import QuestionContextProvider from "./context/QuestionContext";

function App() {
  return (
    <QuestionContextProvider>
      <div className="App"></div>
    </QuestionContextProvider>
  );
}

export default App;
