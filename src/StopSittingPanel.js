import React, { useState } from "react";
import SittingPanel from "./SittingPanel";
import BreakPanel from "./BeakPanel";
import SettingsPanel from "./SettingsPanel";

function StopSittingPanel() {
  const [showSettings, setShowSettings] = useState(false);
  const [stopSitting, setStopSitting] = useState(false);
  const [sittingTime, setSittingTime] = useState(30);
  const [breakTime, setBreakTime] = useState(5);

  return (
    <>
      <button onClick={() => setShowSettings(!showSettings)}>Settings</button>
      {stopSitting ? (
        <BreakPanel time={breakTime} timeUp={() => setStopSitting(false)} />
      ) : (
        <SittingPanel time={sittingTime} timeUp={() => setStopSitting(true)} />
      )}
      {showSettings && (
        <SettingsPanel
          sittingTime={sittingTime}
          breakTime={breakTime}
          setSittingTime={setSittingTime}
          setBreakTime={setBreakTime}
        />
      )}
    </>
  );
}

export default StopSittingPanel;
