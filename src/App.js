import React, { useState } from "react";
import Introduce from "./components/Start";

function App() {
  const [start, setStart] = useState(false);

  if (start) {
    return <></>;
  } else {
    return (
      <div className="App">
        <Introduce setStart={setStart} />
      </div>
    );
  }
}

export default App;
