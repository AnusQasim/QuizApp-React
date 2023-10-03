import { useState } from "react";

import "./App.css";
import { questions } from "./questionsData";

function App() {
  // Functionalities
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState({
    score: 0,
    correct: 0,
    wrong: 0,
  });
  const [showResult, setShowResult] = useState(false);

  const nextQuestion = () => {
    setSelectedAnswer();
    setActiveQuestion(activeQuestion + 1);
    setResult(
      selectedAnswer
        ? {
            score: result.score + 1,
            correct: result.correct + 1,
            wrong: result.wrong,
          }
        : {
            score: result.score,
            correct: result.correct,
            wrong: result.wrong + 1,
          }
    );
    if (activeQuestion === questions.length - 1) {
      setShowResult(true);
      return;
    }
  };

  const validateAnswer = (answer) => {
    if (answer === questions[activeQuestion].correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  return (
    // Render / Front-end
    <div className="App">
      {showResult ? (
        <div>
          Result:
          <br />
          Score: {result.score}
          <br />
          Correct: {result.correct}
          <br />
          Incorrect or Skipped: {result.wrong}
          <br />
          <button
            onClick={() => {
              setActiveQuestion(0);
              setShowResult(false);
              setResult({
                score: 0,
                correct: 0,
                wrong: 0,
              });
              setSelectedAnswer();
            }}
          >
            Try Again
          </button>
        </div>
      ) : (
        <>
          <h1>Quiz App</h1>
          <h3>
            Q# {activeQuestion + 1}. {questions[activeQuestion].question}
          </h3>
          {/* Answers */}
          {/* <ul> */}
          {questions[activeQuestion].choices.map((choice) => {
            return (
              // <li>
              <>
                <label>
                  <input
                    type="radio"
                    onClick={() => validateAnswer(choice)}
                    key={choice}
                    name="choices"
                    id=""
                  />{" "}
                  {choice}
                </label>
                <br />
              </>
              // </li>
            );
          })}
          {/* </ul> */}
          {/* End Answers */}
          <button onClick={nextQuestion}>
            {questions.length - 1 === activeQuestion ? "Finish" : "Next"}
          </button>
        </>
      )}
    </div>
  );
}

export default App;
