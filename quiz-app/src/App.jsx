import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Quiz
  const [qNo, setqNo] = useState(1);

  const [isTimerStart, setIsTimerStart] = useState(false);

  const setTime = () => {
    if (seconds === 59) {
      setSeconds(0);
      setMinute(minute + 1);
    } else {
      setSeconds(seconds + 1);
    }
  };

  useEffect(() => {
    let interval = null;

    if (isTimerStart) {
      interval = setInterval(() => setTime(), 1000);
    }

    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <div>
        <span>{minute < 10 ? "0" + minute : minute}</span>:
        <span>{seconds < 10 ? "0" + seconds : seconds}</span>
      </div>

      <div className="quizWindow">
        <h2 style={{ textAlign: "center" }}>
          <b>Quiz</b>
        </h2>
        <p>
          {qNo < 10 ? "0" + qNo : qNo}. Which of the following option is not
          correct.
        </p>
        <h4>Options</h4>
        <input type="radio" name="mcq_options" id="" value={""} /> ABCD
        <br />
        <input type="radio" name="mcq_options" id="" value={""} /> BCDE
        <br />
        <input type="radio" name="mcq_options" id="" value={""} /> EFGF
        <br />
        <input type="radio" name="mcq_options" id="" value={""} /> HIJK
      </div>
      <button onClick={() => setqNo(qNo + 1)}>Next</button>
      {/* <button onClick={() => {setIsTimerStart(true);}}>start quiz</button> */}
    </div>
  );
}

export default App;
