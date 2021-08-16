import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startTimer: false, time: 0 };

    // This binding is necessary to make `this` work in the callback
    this.handleTimer = this.handleTimer.bind(this);
  }

  render() {
    return (
      <>
        <button onClick={this.handleTimer}>
          {this.state.startTimer ? "Stop Timer" : "Start Timer"}
        </button>
        {this.state.startTimer && <h1>{this.state.time}</h1>}
      </>
    );
  }

  handleTimer() {
    this.setState(
      (prevState) => ({ startTimer: !prevState.startTimer }),
      () => {
        if (this.state.startTimer) {
          this.timerID = setInterval(() => this.tick(), 1000);
        } else {
          clearInterval(this.timerID);
          this.setState({ time: 0 });
        }
      }
    );
  }

  tick() {
    this.setState((prevState) => ({ time: ++prevState.time }));
  }
}

export default Timer;
