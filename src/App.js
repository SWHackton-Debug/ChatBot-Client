import React, { useState } from "react";
import Chatting from "./components/Chatting";
import Start from "./components/Start";

function App() {
  const [start, setStart] = useState(false);

  if (start) {
    return <Chatting />;
  } else {
    return (
      <div className="App">
        <Start setStart={setStart} />
      </div>
    );
  }
}

export default App;
