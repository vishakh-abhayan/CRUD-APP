import { useState } from "react";

import "./App.css";

function App() {
  const hello: string[] = ["vishakh", "godson", "stave", "jonny"];

  return (
    <div>
      {hello.map((event) => (
        <div>{event}</div>
      ))}
    </div>
  );
}

export default App;
