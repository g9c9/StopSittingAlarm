import useTimer from "./Timer";
function SittingPanel(props) {
  const [min, sec, startTimer, toggleTimer] = useTimer(
    props.time,
    props.timeUp
  );

  return (
    <>
      <button>Start Sitting</button>
      <h1>
        {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}
      </h1>
    </>
  );
}

export default SittingPanel;
