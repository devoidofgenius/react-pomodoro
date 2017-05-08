import React from 'react';
import '../css/TimerDisplay.css';
import { convertTime } from '../helpers';

const TimerDisplay = (props) => {
  return (
    <div className="timerDisplay">
      <h3 className="task">Pomodoro Timer</h3>
      <h1 className="digits">{convertTime(props.time)}</h1>
    </div>
  );
}

export default TimerDisplay;
