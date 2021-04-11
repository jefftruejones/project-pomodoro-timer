import React from "react";
import classNames from "../utils/class-names";
import StatusBar from "./StatusBar";
function StopStartAndPause({
  playPause,
  isTimerRunning,
  timeElapsed,
  timeRemaining,
  state,
  countDisplay,
  handleStop,
  pressed,
  pauseDisplay,
  focusing,
  progress,
}) {
  return (
    <>
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
            <button
              type="button"
              className="btn btn-secondary"
              title="Stop the session"
              onClick={pressed ? handleStop : null}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
      <StatusBar
        timeElapsed={timeElapsed}
        timeRemaining={timeRemaining}
        isTimerRunning={isTimerRunning}
        state={state}
        countDisplay={countDisplay}
        pauseDisplay={pauseDisplay}
        focusing={focusing}
        progress={progress}
      />
    </>
  );
}

export default StopStartAndPause;
