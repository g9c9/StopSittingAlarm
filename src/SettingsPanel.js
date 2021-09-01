function SettingsPanel(props) {
  return (
    <>
      <h1>Settings Panel</h1>
      <form>
        <label>
          Sitting Time
          <input
            type="number"
            value={props.sittingTime}
            onChange={(e) => {
              if (e.target.value >= 0) props.setSittingTime(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Break Time
          <input
            type="number"
            value={props.breakTime}
            onChange={(e) => {
              if (e.target.value >= 0) props.setBreakTime(e.target.value);
            }}
          />
        </label>
      </form>
    </>
  );
}

export default SettingsPanel;
