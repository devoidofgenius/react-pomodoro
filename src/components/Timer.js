import React from 'react';
import TimerDisplay from './TimerDisplay';
import SessionControls from './SessionControls';
import TimerControls from './TimerControls';

class Timer extends React.Component {
  render() {
    return (
      <div>
        <TimerDisplay />
        <SessionControls />
        <TimerControls />
      </div>
    );
  }
}

export default Timer;
