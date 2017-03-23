import React from 'react';
import '../css/TimerDisplay.css';

class TimerDisplay extends React.Component {

// Convert time from seconds (1500) to readable format (25:00)
  convertTime(time) {
    let mins = Math.floor(time / 60);
    let secs = time - mins * 60;
    let timeFormatted = `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
    return timeFormatted;
  }

  render() {
    return (
      <div className="timerDisplay">
        <h3 className="task">Pomodoro Timer</h3>
        <h1 className="digits">{this.convertTime(this.props.time)}</h1>
      </div>
    );
  }
}

export default TimerDisplay;
