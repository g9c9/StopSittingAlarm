import useTimer from "./Timer";

function BreakPanel(props) {
  const [min, sec, ,] = useTimer(props.time, props.timeUp, true);

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
