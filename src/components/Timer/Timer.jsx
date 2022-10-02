import React, { Fragment, useEffect, useState } from "react";
import ControlButton from "../ControlButton/ControlButton";

export default function Timer() {

  const [time, setTime] = useState(0)
  const [isStarted, setIsStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(true)

  
  useEffect(() => {
    let interval = null;
    setTime(3600000)

    if(isStarted && isPaused === false) {
      interval = setInterval(() => {
        setTime(time => time-10)
      }, 10)
    } else {
      clearInterval(interval)
    }

    return(() => clearInterval(interval))

  },[isStarted, isPaused])

  const handleStart = () => {
    let valuez = document.getElementById('')

    console.log(valuez.value)
    setIsStarted(true)
    setIsPaused(false)
  }

  const handlePaused = () => {
    setIsPaused(!isPaused);
  }

  const handleReset = () => {
    setIsPaused(true)
    setIsStarted(false)
    setTime(0);
  }

  return(
    <Fragment>
      <input type="number" name="a" id="inputz" value={0} />
      <button onClick={handleStart}>Mulai</button>
      <div className="time">
        <span>{("0" + Math.floor(time / 360000)).slice(-2)}:</span>
        <span>{("0" + Math.floor(time / 60000) % 60).slice(-2)}:</span>
        <span>{("0" + Math.floor(time /1000) % 60).slice(-2)}</span>
      </div>
      <ControlButton
        handleStart={handleStart}
        handlePaused={handlePaused}
        handleReset={handleReset}
        isPaused={isPaused}
        isStarted={isStarted}
      />
    </Fragment>
  )
}