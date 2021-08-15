import React from "react";
import Clock from "./Clock";
import Timer from "./Timer";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Stop Sitting</h1>
        <Clock />
        <Timer />
      </div>
    );
  }
}

export default App;
