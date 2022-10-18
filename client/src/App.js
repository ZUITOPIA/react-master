import React, { useState } from "react";
import "./App.css";
import { Counter } from "./Counter";
// import LifecycleEx from "./R008_LifecycleEx";

function App() {
  const [isCounterOpen, setIsCounterOpen] = useState(false);
  const handleCounterOpen = () => {
    setIsCounterOpen((prev) => !prev);
  };
  return (
    <>
      {/* <div>
        <h1>Start React 200!</h1>
        <p>CSS 적용하기</p>
        <LifecycleEx prop_value="FromApp.js" />
      </div> */}
      {/* Counter 예제로 더 이해해보기 */}
      <div>
        <button onClick={handleCounterOpen}>Show Counter</button>
        {isCounterOpen && <Counter />}
      </div>
    </>
  );
}

export default App;
