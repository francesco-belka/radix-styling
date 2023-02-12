import "./App.css";
import { StitchesDialog } from "./components/stitches";
import { TailwindDialog } from "./components/tailwind";

function App() {
  return (
    <div className="App">
      <div></div>
      <h1>Radix UI + stitches / tailwind</h1>
      <div className="p-6 flex justify-around">
        <TailwindDialog />
        <StitchesDialog />
      </div>
    </div>
  );
}

export default App;
