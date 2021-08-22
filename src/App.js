import React from "react";
import Greeting from "./Greeting";
import Clock from "./Clock";
import Timer from "./Timer";

class App extends React.Component {
  render() {
    return (
      <>
        <Greeting name="George" />
        <Clock />
        <button>Settings</button>
        <button>Start Sitting</button>
        <h1>00:01:23</h1>
      </>
    );
  }
}

export default App;
