import "./App.css";
import { StitchesDialog } from "./components/stitches";
import { TailwindDialog } from "./components/tailwind";
import { ThemeuiDialog } from "./components/themeUI";
import { ThemeProvider } from "theme-ui";
import { theme } from "./components/themeUI/theme";
function App() {
  return (
    <div className="App">
      <h1>
        <a href="https://www.radix-ui.com/" target="_blank">
          Radix UI
        </a>
        <br />
        +
        <br />
        <a href="https://stitches.dev/" target="_blank">
          Stitches
        </a>{" "}
        /{" "}
        <a href="https://tailwindcss.com/" target="_blank">
          TailwindCSS
        </a>{" "}
        /{" "}
        <a href="https://theme-ui.com/" target="_blank">
          Theme UI
        </a>
      </h1>
      <div className="flex justify-around p-6">
        <TailwindDialog />
        <StitchesDialog />
        <ThemeProvider theme={theme}>
          <ThemeuiDialog />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
