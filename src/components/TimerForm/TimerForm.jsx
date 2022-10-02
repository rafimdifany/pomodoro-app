import React, { Fragment, useEffect, useState } from "react";

export default function TimerForm(props) {

  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  //TODO : create handleStart while button start is clicked
  const handleStart = () => {


  }

  function handleChangeTime() {
    let minute = document.getElementById('minute')
    let second = document.getElementById('second')

    setMinutes(minute.value)
    setSeconds(second.value)
  }

  return (
    <Fragment>
      <form action="">
        <div className="form-group">
          <label htmlFor="minute">Minute</label>
          <input type="number" id="minute" value={minutes} onChange={handleChangeTime} />
        </div>
        <div className="form-group">
          <label htmlFor="second">Second</label>
          <input type="number" id="second" value={seconds} onChange={handleChangeTime} />
        </div>

        <div>
          <button type="button" onClick={handleStart} >Start</button>
        </div>
      </form>
    </Fragment>
  )
}