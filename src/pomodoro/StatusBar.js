import React from "react";
import { secondsToDuration } from "../utils/duration";
import { minutesToDuration } from "../utils/duration";

//import "./StatusBar.css";
function StatusBar({
  timeElapsed,
  timeRemaining,
  pauseDisplay,
  state,
  countDisplay,
  focusing,
  progress,
}) {
  // let someNum = (timeElapsed / timeRemaining) * 100;
  //Focusing for {minutesToDuration(state.concentrate)} minutes
  //On Break for {minutesToDuration(state.break)}minutes

  //console.log(someNum);
  return (
    <div className={countDisplay}>
      {/* TODO: This area should show only when a focus or break session is running or pauses */}
      <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}

          {focusing ? (
            <h2 data-testid="session-title">
              Focusing for {minutesToDuration(state.concentrate)} minutes
            </h2>
          ) : (
            <h2 data-testid="session-title">
              On Break for {minutesToDuration(state.break)} minutes
            </h2>
          )}

          {/* TODO: Update message below to include time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(timeRemaining)} remaining
          </p>
          <h2 className={pauseDisplay ? "" : "d-none"}>PAUSED</h2>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={progress} // TODO: Increase aria-valuenow as elapsed time increases
              style={{
                width: `${progress}%`,
              }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusBar;
