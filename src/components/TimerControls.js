import React from 'react';
import '../css/TimerControls.css';

class TimerControls extends React.Component {
  render() {
    return (
      <div className="timerControls">
        <button onClick={this.props.startTimer}>Play</button>
        <button onClick={this.props.pauseTimer}>Pause</button>
      </div>
    );
  }
}

export default TimerControls;
