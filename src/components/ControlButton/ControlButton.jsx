import React, { Fragment } from "react";

export default function ControlButton(props) {
  

  return(
    <Fragment>
      <div className="control-button">
        <button onClick={props.isStarted ? props.handleReset : props.handleStart}>{props.isStarted ? "Reset" :"Start"}</button>
        <button onClick={props.handlePaused}>{props.isPaused ? "Resume" : "Pause"}</button>
      </div>
    </Fragment>
  )
}