import React, { useState } from "react";

import useInterval from "../utils/useInterval";
import SetFocusAndBreak from "./SetFocusAndBreak";
import StopStartAndPause from "./StopStartAndPause";

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [state, setState] = useState({
    concentrate: 25,
    break: 5,
  }); //focus and break button defaults

  const [timeRemaining, setTimeRemaining] = useState(state.concentrate * 60); //default time remaining is 25 min
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [countDisplay, setCountDisplay] = useState("d-none"); //makes status bar appear and disappear
  const [pauseDisplay, setPauseDisplay] = useState(true); //controls PAUSE
  const [pressed, setPressed] = useState(false); //controls if focus-break buttons are functional - if play-paused is pressed
  const [focusing, setFocusing] = useState(false);
  const [counter, setCounter] = useState(1); //counts first time play is pressed
  const [progress, setProgress] = useState(0); //controls progress bar

  const handleStop = () => {
    //handles stop button
    //refresh the page, status bar disappears, focus-break buttons become functional
    setTimeRemaining(0);
    setTimeElapsed(0);
    setCountDisplay("d-none");
    setIsTimerRunning(false);
    setPressed(false);
    setPauseDisplay(true);

    console.log("Stopping");
  };

  const handleChange = (value, num) => {
    //handles focus and break time changes
    if (value === "concentrate") {
      let val = state.concentrate + num;
      let newVal = Math.min(60, Math.max(5, val)); //sets focus time between 5 and 60
      setState({ ...state, [value]: newVal });
    } else {
      let val = state.break + num;
      let newVal = Math.min(15, Math.max(1, val)); //set break time between 1 and 15
      setState({ ...state, [value]: newVal });
    }

    console.log("clicked");

    console.log("focus number: ", state.concentrate);

    console.log("break number: ", state.break);
  };

  useInterval(
    () => {
      setTimeRemaining((time) => time - 1); //count down time by seconds

      setTimeElapsed((time) => time + 1); //count seconds elapsing
      if (focusing) {
        setProgress((timeElapsed / (state.concentrate * 60)) * 100); //progress bar during focus
      } else {
        setProgress((timeElapsed / (state.break * 60)) * 100); //progress bar during break
      }
      if (timeRemaining === 0) {
        //after focus time has ended, switch to break time
        //https://bigsoundbank.com/UPLOAD/mp3/1482.mp3
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
        focusing
          ? setTimeRemaining(state.break * 60)
          : setTimeRemaining(state.concentrate * 60); //switch session type time
        setFocusing((prev) => !prev); //switch session type
        //state.concentrate * 60
        setTimeElapsed(0);
        setProgress(0);
        //state.break * 60
      }
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    if (!focusing && counter === 1) {
      setTimeRemaining(state.concentrate * 60 - timeElapsed);
      setCounter(counter + 1);
      setFocusing((prev) => !prev);
    }
    setIsTimerRunning((prevState) => !prevState);
    setTimeRemaining(state.concentrate * 60 - timeElapsed);
    setCountDisplay(""); //make status bar appear
    setPressed(true);
    setPauseDisplay((prev) => !prev);

    console.log("yay!");
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <SetFocusAndBreak
          handleChange={handleChange}
          state={state}
          pressed={pressed}
        />
      </div>

      <StopStartAndPause
        playPause={playPause}
        isTimerRunning={isTimerRunning}
        timeElapsed={timeElapsed}
        timeRemaining={timeRemaining}
        state={state}
        countDisplay={countDisplay}
        handleStop={handleStop}
        pressed={pressed}
        pauseDisplay={pauseDisplay}
        focusing={focusing}
        progress={progress}
      />
    </div>
  );
}

export default Pomodoro;
