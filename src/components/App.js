import React from "react";
import Greeting from "./Greeting";
import Clock from "./Clock";
import StopSittingPanel from "./StopSittingPanel";

class App extends React.Component {
  render() {
    return (
      <>
        <Greeting name="George" />
        <Clock />
        <StopSittingPanel />
      </>
    );
  }
}

export default App;
