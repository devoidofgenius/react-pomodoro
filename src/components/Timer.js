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
    this.pauseTimer = this.pauseTimer.bind(this);
    this.decrementTime = this.decrementTime.bind(this);
    this.completeSession = this.completeSession.bind(this);
  }

// Sets new time state based on values passed into function
  setNewTime(newTime) {
    // Need to reset Timer;

    this.setState({
      time: newTime,
      sessionTime: newTime,
    });
  }

// Sets isPlaying state value to true and fires decrementTime function inside setInterval on placeholder timer state
  startTimer() {
    const isPlaying = this.state.isPlaying;
    if(isPlaying === false) {
      this.setState({
        tick: setInterval(this.decrementTime, 1000),
        isPlaying: true
      });
    }
  }
// Pause timer by clearInterval and set isPlaying to false
  pauseTimer() {
    const isPlaying = this.state.isPlaying;
    if(isPlaying === true) {
      clearInterval(this.state.tick);

      this.setState({
        tick: null,
        isPlaying: false
      })
    }
  }

  completeSession() {
    const isPlaying = this.state.isPlaying;
    if(isPlaying === true) {
      clearInterval(this.state.tick);

      this.setState({
        tick: null,
        isPlaying: false
      })
    }
    // Temporary until Desktop Notification feature and Sound
    alert("DONE!!!")
  }

// Decrements the time state value by one
  decrementTime() {
    const time = this.state.time;
    if(time === 0) {
      this.completeSession();
      return;
    }

    this.setState({
      time: this.state.time - 1
    });
  }


  render() {
    return (
      <div>
        <TimerDisplay time={this.state.time}/>
        <SessionControls setNewTime={this.setNewTime} />
        <TimerControls startTimer={this.startTimer} pauseTimer={this.pauseTimer} />
      </div>
    );
  }
}

export default Timer;
