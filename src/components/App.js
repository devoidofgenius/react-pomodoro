import React from 'react';
import '../css/App.css';
import Timer from './Timer';

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Timer />
      </div>
    );
  }
}

export default App;
