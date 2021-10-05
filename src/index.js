import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

(async function () {
  // Asking user for notification permission
  await Notification.requestPermission();

  // Send greeting if permisison is granted
  if (Notification.permission === "granted") {
    const greeting = new Notification("Hi, How are you?");
    //Close greeting in 5 seconds
    setTimeout(() => greeting.close(), 5 * 1000);
  }
})();
