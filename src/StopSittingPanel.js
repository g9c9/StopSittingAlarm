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
      <button>Settings</button>
      {stopSitting ? (
        <BreakPanel time={breakTime} />
      ) : (
        <SittingPanel time={sittingTime} />
      )}
      {showSettings && <SettingsPanel />}
    </>
  );
}

export default StopSittingPanel;
