import { useState } from "react";
import { Routes } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
