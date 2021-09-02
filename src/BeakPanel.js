import React, { useEffect } from "react";
import useTimer from "./Timer";

function BreakPanel(props) {
  const [min, sec, , toggleTimer] = useTimer(props.time, props.timeUp);

  useEffect(() => {
    toggleTimer();
    return () => {
      toggleTimer();
    };
  }, []);

  return (
    <>
      <h1>Stop Sitting!</h1>
      <h1>
        {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}
      </h1>
    </>
  );
}

export default BreakPanel;
