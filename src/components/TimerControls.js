import React from 'react';
import '../css/TimerControls.css';

class TimerControls extends React.Component {
  render() {
    return (
      <div className="timerControls">
        <div className="play" onClick={this.props.startTimer}>
          <svg className="play-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46"><path d="M14.8 46c-1.4 0-2.8-0.5-3.9-1.6 -2.3-2.2-2.4-5.8-0.2-8.1l12.8-13.4L10.6 9.6C8.5 7.4 8.5 3.8 10.8 1.6c2.3-2.2 5.9-2.1 8.1 0.2l16.5 17.3c2.1 2.2 2.1 5.7 0 7.9L18.9 44.2C17.8 45.4 16.3 46 14.8 46z"/></svg>
        </div>
        <div className="pause" onClick={this.props.pauseTimer}>
          <svg className="pause-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46"><path d="M14 0c-2.8 0-5 2.2-5 5v36c0 2.8 2.2 5 5 5s5-2.2 5-5V5C19 2.2 16.8 0 14 0z"/><path d="M32 0c-2.8 0-5 2.2-5 5v36c0 2.8 2.2 5 5 5s5-2.2 5-5V5C37 2.2 34.7 0 32 0z"/></svg>
        </div>
      </div>
    );
  }
}

export default TimerControls;
