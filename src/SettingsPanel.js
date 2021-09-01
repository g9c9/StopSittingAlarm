function SettingsPanel(props) {
  return (
    <>
      <h1>Settings Panel</h1>
      <form>
        <label>
          Sitting Time
          <input type="number" value={props.sittingTime} />
        </label>
        <br />
        <label>
          Break Time
          <input type="number" value={props.breakTime} />
        </label>
      </form>
    </>
  );
}

export default SettingsPanel;
