import React from "react";
import "./App.css";
import PropsRequired from "./R021_PropsRequired";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsRequired ReactString="isRequired" ReactNumber={100} />
    </div>
  );
}

export default App;
