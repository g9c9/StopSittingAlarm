import { useState, useEffect } from "react";

function useTimer(timeLimit, timeUp) {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    let id = null;
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
      });
    } else {
      id && clearInterval(id);
      setSec(0);
      setMin(0);
    }
    return () => {
      id && clearInterval(id);
    };
  }, [startTimer]);

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
