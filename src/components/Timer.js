import React from 'react';
import TimerDisplay from './TimerDisplay';
import SessionControls from './SessionControls';
import TimerControls from './TimerControls';
import Modal from './Modal';
import notify from '../audio/notify.mp3';
import icon from '../css/images/thumbsup.png';

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
        time: 1500,
        sessionTime: 1500,
        isPlaying: false,
        showModal: false
    }

    this.setNewTime = this.setNewTime.bind(this);
    this.setCustomTime = this.setCustomTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.decrementTime = this.decrementTime.bind(this);
    this.completeSession = this.completeSession.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
      Notification.requestPermission();
  }

// Sets new time state based on values passed into function
  setNewTime(newTime) {
    // Need to reset Timer;

    this.setState({
      time: newTime,
      sessionTime: newTime,
    });
  }

// Sets custom time via Modal
  setCustomTime(customTime) {
    // Need to reset Timer;

    this.setState({
      time: customTime,
      sessionTime: customTime,
    });
  }

  // Toggles modal visibility
    toggleModal(toggle) {
      this.setState({
        showModal: toggle
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
    this.notify();
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

  notify() {
    const notification = new Notification('Congratulations!!', {
      // Temporary icon needs to be replaced.
      icon: icon,
      body: 'You completed your session!'
    })
    setTimeout(notification.close.bind(notification), 10000);
    const audio = new Audio(notify);
    audio.play();
  }


  render() {
    return (
      <div>
        <TimerDisplay time={this.state.time}/>
        <TimerControls startTimer={this.startTimer} pauseTimer={this.pauseTimer} />
        <SessionControls setNewTime={this.setNewTime} toggleModal={this.toggleModal} />
        {this.state.showModal ? <Modal toggleModal={this.toggleModal} setCustomTime={this.setCustomTime}/> : null}
      </div>
    );
  }
}

export default Timer;
