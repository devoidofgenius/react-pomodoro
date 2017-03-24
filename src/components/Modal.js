import React from 'react';
import '../css/Modal.css';

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      customTime: 15
    }

    this.toggleHandler = this.toggleHandler.bind(this);
    this.reduceTime = this.reduceTime.bind(this);
    this.addTime = this.addTime.bind(this);
    this.submitCustomTime = this.submitCustomTime.bind(this);
  }
  // Handles custom time click
    toggleHandler() {
      this.props.toggleModal(false);
    }

    reduceTime() {
      if(this.state.customTime <= 1) {
        console.log("Less than zero");
        return;
      }
      this.setState({
        customTime: this.state.customTime - 1
      });
    }

    addTime() {
      if(this.state.customTime >= 60) {
        console.log("Greater than 60");
        return;
      }
      this.setState({
        customTime: this.state.customTime + 1
      });
    }

    submitCustomTime() {
      const customTime = Number(document.querySelector(".customTime").innerHTML) * 60;
      this.props.setCustomTime(customTime);
      this.props.toggleModal(false);
    }

  render() {
    return (
      <div className="modal">
        <div className="exit" onClick={this.toggleHandler}>
          <svg className="exit-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.8 41.8"><path d="M27.9 20.9L40.3 8.5c2-2 2-5.1 0-7.1 -2-2-5.1-2-7.1 0L20.9 13.8 8.5 1.5c-2-2-5.1-2-7.1 0 -2 2-2 5.1 0 7.1l12.3 12.3L1.5 33.2c-2 2-2 5.1 0 7.1C2.4 41.3 3.7 41.8 5 41.8c1.3 0 2.6-0.5 3.5-1.5l12.3-12.3 12.3 12.3c1 1 2.3 1.5 3.5 1.5s2.6-0.5 3.5-1.5c2-2 2-5.1 0-7.1L27.9 20.9z"/></svg>
        </div>
        <div className="inner-wrapper">
          <div className="custom">
            <div className="customControl">
              <div className="minus" onClick={this.reduceTime}>
                <svg className="minus-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46"><path d="M32.3 19H13.7c-2.2 0-4 1.8-4 4s1.8 4 4 4h18.6c2.2 0 4-1.8 4-4S34.5 19 32.3 19z"/><path d="M23 0C10.3 0 0 10.3 0 23c0 12.7 10.3 23 23 23s23-10.3 23-23C46 10.3 35.7 0 23 0zM23 40c-9.4 0-17-7.6-17-17 0-9.4 7.6-17 17-17s17 7.6 17 17C40 32.4 32.4 40 23 40z"/></svg>
              </div>
              <h1 className="customTime">{this.state.customTime}</h1>
              <div className="plus" onClick={this.addTime}>
                <svg className="plus-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.5 45.5"><path d="M32 18.8h-5.3V13.6c0-2.2-1.8-4-4-4 -2.2 0-4 1.8-4 4v5.2H13.6c-2.2 0-4 1.8-4 4 0 2.2 1.8 4 4 4h5.2v5.2c0 2.2 1.8 4 4 4 2.2 0 4-1.8 4-4v-5.2h5.3c2.2 0 4-1.8 4-4C35.9 20.6 34.2 18.8 32 18.8z"/><path d="M22.8 0C10.2 0 0 10.2 0 22.8 0 35.4 10.2 45.5 22.8 45.5c12.6 0 22.8-10.2 22.8-22.8C45.5 10.2 35.4 0 22.8 0zM22.8 39.6c-9.3 0-16.8-7.5-16.8-16.8 0-9.3 7.6-16.8 16.8-16.8 9.3 0 16.8 7.6 16.8 16.8C39.6 32.1 32.1 39.6 22.8 39.6z"/></svg>
              </div>
            </div>
            <button onClick={this.submitCustomTime}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
