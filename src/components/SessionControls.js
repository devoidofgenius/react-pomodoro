import React from 'react';
import '../css/SessionControls.css';

class SessionControls extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
  }

// Handles click and grabs value from target
  clickHandler(event) {
    const newTime = Number(event.target.value);
    this.props.setNewTime(newTime);
  }

// Handles custom time click
  toggleHandler() {
    const toggle = true;
    this.props.toggleModal(toggle);
  }

  render() {
    return (
      <div className="sessionControls">
        <button onClick={this.clickHandler} value="1500">25 min</button>
        <button onClick={this.clickHandler} value="300">5 min</button>
        <button onClick={this.toggleHandler}>Custom</button>
      </div>
    );
  }
}

export default SessionControls;
