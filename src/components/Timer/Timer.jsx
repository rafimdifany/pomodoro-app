import React, { Fragment, useEffect, useState } from "react";
import ControlButton from "../ControlButton/ControlButton";
import TimerForm from "../TimerForm/TimerForm";

export default function Timer() {

  const [time, setTime] = useState(0)
  const [isStarted, setIsStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(true)


  useEffect(() => {
    let interval = null;
    setTime(3600000)

    if (isStarted && isPaused === false) {
      interval = setInterval(() => {
        setTime(time => time - 10)
      }, 10)
    } else {
      clearInterval(interval)
    }

    return (() => clearInterval(interval))

  }, [isStarted, isPaused])

  const handleStart = () => {
    setIsStarted(true)
    setIsPaused(false)

    handleToggleAttribute()
  }

  const handlePaused = () => {
    setIsPaused(!isPaused);
  }

  const handleReset = () => {
    setIsPaused(true)
    setIsStarted(false)
    setTime(0);
    handleToggleAttribute()
  }

  function handleToggleAttribute() {
    let timer = document.getElementById('timer')
    timer.toggleAttribute('hidden')

    let formTimer = document.getElementById('timer-form')
    formTimer.toggleAttribute('hidden')
  }

  return (
    <Fragment>
      <div id="timer-form">
        <TimerForm 
          handleStart={handleStart}
          toggleAttr={true}
        />
      </div>
      <div hidden id="timer">
        <div className="time" id="time">
          <span>{("0" + Math.floor(time / 360000)).slice(-2)}:</span>
          <span>{("0" + Math.floor(time / 60000) % 60).slice(-2)}:</span>
          <span>{("0" + Math.floor(time / 1000) % 60).slice(-2)}</span>
        </div>
        <ControlButton
          handleStart={handleStart}
          handlePaused={handlePaused}
          handleReset={handleReset}
          isPaused={isPaused}
          isStarted={isStarted}
        />
      </div>
    </Fragment>
  )
}