import { createSignal, type Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  const [nr, setNr] = createSignal(0);
  let intervalId = 0;
  function handleStart() {
    intervalId = setInterval(() => {
      setNr(nr() + 1);
    }, 2000);
  }
  function handleStop() {
    clearInterval(intervalId);
  }
  return (
    <div class={styles.App}>
      <div> Hallo </div>
      <div> {nr()}</div>
      <button onClick={handleStart}> start</button>
      <button onClick={handleStop}> stop</button>
    </div>
  );
};

export default App;
