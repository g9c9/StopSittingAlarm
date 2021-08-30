import React, { useState } from "react";
import Timer from "./Timer";

function StopSittingPanel() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <button>Settings</button>
      <button>Start Sitting</button>
      <Timer />
    </>
  );
}

export default StopSittingPanel;
