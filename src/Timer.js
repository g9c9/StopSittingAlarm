import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startTimer: false };

    // This binding is necessary to make `this` work in the callback
    this.handleTimer = this.handleTimer.bind(this);
  }

  render() {
    return (
      <button onClick={this.handleTimer}>
        {this.state.startTimer ? "Stop Timer" : "Start Timer"}
      </button>
    );
  }

  handleTimer() {
    this.setState((prevState) => ({ startTimer: !prevState.startTimer }));
  }
}

export default Timer;
