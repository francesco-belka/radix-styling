import { Theme, useThemeUI, ThemeUIContextValue } from "theme-ui";

const makeTheme = <T extends Theme>(t: T) => t;

export const theme = makeTheme({
  config: {
    useColorSchemeMediaQuery: false,
    useLocalStorage: true, // Auto persist color mode
    useBorderBox: true,
  },
  fonts: {
    body: "system-ui, sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 32],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  radii: {
    small: 4,
    medium: 6,
    large: 8,
    round: 500,
  },
  shadows: {
    default: "1px 0px 5px 2px #373737",
  },
  sizes: {
    icon: 18,
    logo: 35,
  },
  colors: {
    text: "#000",
    background: "#242424",
    primary: "#3b82f6",
    modes: {
      dark: {
        primary: "#3ba8f6",
        text: "#fff",
        background: "#111",
      },
      alt: {
        primary: "#aaaaaa",
        text: "#bbb",
        background: "#ccc",
      },
    },
  },
  styles: {
    root: {},
    h1: {
      fontSize: 32,
      color: "primary",
      marginY: 5,
    },
  },
  buttons: {
    trigger: {
      display: "flex",
      flexFlow: "row nowrap",
      gap: "12px",
      alignItems: "center",
      paddingX: ".75rem",
      paddingY: ".25rem",
      height: "3.5rem",
      borderRadius: "medium",
      outline: "1px solid white",
      userSelect: "none",
      "&:hover": {
        outlineWidth: "2px",
      },
    },
  },
  layout
});

export type ExactTheme = typeof theme;

interface ExactContextValue extends Omit<ThemeUIContextValue, "theme"> {
  theme: ExactTheme;
}

export const useTheme = useThemeUI as unknown as () => ExactContextValue;
