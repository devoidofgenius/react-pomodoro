import React from 'react';
import '../css/SessionControls.css';

class SessionControls extends React.Component {
  render() {
    return (
      <div className="sessionControls">
        <button>Long</button>
        <button>Break</button>
        <button>Short</button>
      </div>
    );
  }
}

export default SessionControls;
