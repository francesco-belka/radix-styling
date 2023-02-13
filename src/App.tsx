import { useState } from "react";
import "./App.css";
import { StitchesDialog } from "./components/stitches";
import { TailwindDialog } from "./components/tailwind";

function App() {
  return (
    <div className="App">
      <div></div>
      <h1>Radix UI + stitches / tailwind</h1>
      <div className="flex justify-around p-6">
        <TailwindDialog />
        <StitchesDialog />
      </div>
    </div>
  );
}

export default App;
