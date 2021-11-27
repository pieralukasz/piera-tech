import { createTheme, PaletteMode, Theme, ThemeOptions } from "@mui/material";
import { red } from "@mui/material/colors";

const typography = {
  fontFamily: ['"JetBrains Mono"', "latin"].join(","),
  fontSize: 14,
};

export const createDefaultTheme = (
  mode: PaletteMode,
  options?: ThemeOptions
): Theme => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#3477db",
      },
      secondary: {
        main: "#b8860b",
      },
      error: {
        main: red.A400,
      },
    },
    typography,
    ...options,
  });
};
