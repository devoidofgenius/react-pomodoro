import React from 'react';
import '../css/SessionControls.css';

class SessionControls extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

// Handles click and grabs value from target
  clickHandler(event) {
    const newTime = Number(event.target.value);
    this.props.setNewTime(newTime);
  }

  render() {
    return (
      <div className="sessionControls">
        <button onClick={this.clickHandler} value="1500">Code</button>
        <button onClick={this.clickHandler} value="300">Stretch</button>
        <button onClick={this.clickHandler} value="900">Walk</button>
      </div>
    );
  }
}

export default SessionControls;
