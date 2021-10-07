import React, { useState } from "react";
import Greeting from "./Greeting";
import Clock from "./Clock";
import StopSittingPanel from "./StopSittingPanel";

function App() {
  const [enableNotif, setEnableNotif] = useState(false);

  return (
    <>
      <Greeting name="George" />
      <Clock />
      <StopSittingPanel
        enableNotif={enableNotif}
        setEnableNotif={setEnableNotif}
      />
    </>
  );
}

export default App;
