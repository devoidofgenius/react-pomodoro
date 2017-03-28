import React from 'react';
import '../css/TimerDisplay.css';
import { convertTime } from '../helpers';

class TimerDisplay extends React.Component {



  render() {
    return (
      <div className="timerDisplay">
        <h3 className="task">Pomodoro Timer</h3>
        <h1 className="digits">{convertTime(this.props.time)}</h1>
      </div>
    );
  }
}

export default TimerDisplay;
