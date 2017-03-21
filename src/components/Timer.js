import React from 'react';
import TimerDisplay from './TimerDisplay';
import SessionControls from './SessionControls';
import TimerControls from './TimerControls';

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
        time: 1500,
        sessionTime: 1500,
        isPlaying: false
    }

    this.setNewTime = this.setNewTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.decrementTime = this.decrementTime.bind(this);
  }

  setNewTime(newTime) {
    // Need to reset Timer;

    this.setState({
      time: newTime,
      sessionTime: newTime,
    });
  }

  startTimer() {
    this.setState({
      timer: setInterval(this.decrementTime, 1000),
      isPlaying: true
    });
  }

  decrementTime() {
    this.setState({
      time: this.state.time - 1
    });
  }


  render() {
    return (
      <div>
        <TimerDisplay time={this.state.time}/>
        <SessionControls setNewTime={this.setNewTime} />
        <TimerControls startTimer={this.startTimer} />
      </div>
    );
  }
}

export default Timer;
