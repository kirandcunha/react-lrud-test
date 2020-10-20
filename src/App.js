import React from "react";
import {FocusRoot} from "@please/lrud";
import Button from "./components/button";
import "./App.css";

function App() {
  return (
    <FocusRoot>
      <div className="App">
        <div className="Game-list">
          <Button text="Game 1"/>
          <Button text="Game 2"/>
          <Button text="Game 3"/>
          <Button text="Game 4  "/>
        </div>
      </div>
    </FocusRoot>
  );
}

export default App;
