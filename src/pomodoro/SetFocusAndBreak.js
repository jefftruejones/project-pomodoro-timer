import React from "react";
import { minutesToDuration } from "../utils/duration";

function SetFocusAndBreak({ handleChange, state, pressed }) {
  return (
    <>
      {" "}
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* TODO: Update this text to display the current focus session duration */}
            Focus Duration: {minutesToDuration(state.concentrate)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={!pressed ? () => handleChange("concentrate", -5) : null}
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={!pressed ? () => handleChange("concentrate", 5) : null}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>{" "}
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              {/* TODO: Update this text to display the current break session duration */}
              Break Duration: {minutesToDuration(state.break)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={!pressed ? () => handleChange("break", -1) : null}
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={!pressed ? () => handleChange("break", 1) : null}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetFocusAndBreak;
