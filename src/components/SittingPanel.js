function SittingPanel(props) {
  function handleClick() {
    props.setShowSettings(false);
    props.toggleTimer();
  }

  return (
    <>
      <button onClick={handleClick}>
        {props.startTimer ? "Stop Sitting" : "Start Sitting"}
      </button>
      <h1>
        {props.min < 10 ? "0" + props.min : props.min}:
        {props.sec < 10 ? "0" + props.sec : props.sec}
      </h1>
    </>
  );
}

export default SittingPanel;
