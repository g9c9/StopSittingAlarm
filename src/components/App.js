import React, { useEffect, useState } from "react";
import Greeting from "./Greeting";
import Clock from "./Clock";
import StopSittingPanel from "./StopSittingPanel";

function App() {
  const [enableNotif, setEnableNotif] = useState(false);

  useEffect(() => {
    async function getPermission() {
      if (
        enableNotif &&
        Notification.permission !== "granted" &&
        Notification.permission !== "denied"
      ) {
        await Notification.requestPermission();
      }
    }
    getPermission();
  }, [enableNotif]);

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
