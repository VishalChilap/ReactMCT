import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Context from "./Components/Context";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState(false);
  const changeMode = () => {
    setMode(!mode);
  };
  return (
    <div className={mode?"dark":"light"}>
      <Context.Provider value={mode}>
        <Navbar changeMode={changeMode} />
        <Home />
      </Context.Provider>
    </div>
  );
}

export default App;
