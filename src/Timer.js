import { useState, useEffect } from "react";

function useTimer(timeLimit, timeUp) {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [timerID, setTimerID] = useState(null);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    if (startTimer) {
      setTimerID(
        setInterval(() => {
          if (sec < 59) {
            setSec(sec + 1);
          } else {
            setMin(min + 1);
            setSec(0);
          }
        })
      );
    } else {
      clearInterval(timerID);
      setSec(0);
      setMin(0);
    }
    return () => {
      clearInterval(timerID);
    };
  }, [startTimer, min, sec, timerID]);

  useEffect(() => {
    if (min === timeLimit) {
      timeUp();
      setStartTimer(false);
    }
  }, [min, timeLimit, timeUp]);

  function toggleTimer() {
    setStartTimer(!startTimer);
  }

  return [min, sec, startTimer, toggleTimer];
}

export default useTimer;
