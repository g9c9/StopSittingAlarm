import { useState, useEffect } from "react";

function useTimer(timeLimit, timeUp, start) {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [startTimer, setStartTimer] = useState(start);

  useEffect(() => {
    let id = 0;
    if (startTimer) {
      id = setInterval(() => {
        setSec((s) => {
          if (s < 59) {
            return s + 1;
          } else {
            setMin((m) => m + 1);
            return 0;
          }
        });
      }, 1000);
    } else {
      clearInterval(id);
      setSec(0);
      setMin(0);
    }
    return () => {
      clearInterval(id);
    };
  }, [startTimer]);

  useEffect(() => {
    if (min >= timeLimit) {
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
