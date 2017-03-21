import React from 'react';
import '../css/TimerControls.css';

class TimerControls extends React.Component {
  render() {
    return (
      <div className="timerControls">
        <button>Play</button>
        <button>Pause</button>
      </div>
    );
  }
}

export default TimerControls;
