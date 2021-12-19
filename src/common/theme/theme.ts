import { createTheme, PaletteMode, Theme, ThemeOptions } from "@mui/material";
import { red } from "@mui/material/colors";
import { BLUE, PINK } from "@/common/colors";

const typography = {
  fontFamily: ['"JetBrains Mono"', "latin"].join(","),
  h1: {
    fontSize: "2rem",
    margin: "2px",
  },
  h2: {
    fontSize: "1.5rem",
  },
  h3: {
    fontSize: "1.17rem",
  },
  h4: {
    fontSize: "1rem",
  },
  h5: {
    fontSize: "0.83rem",
  },
  h6: {
    fontSize: "0.67rem",
  },
};

export const createDefaultTheme = (
  mode: PaletteMode,
  options?: ThemeOptions
): Theme => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: BLUE,
      },
      secondary: {
        main: PINK,
      },
      error: {
        main: red.A400,
      },
    },
    typography,
    ...options,
  });
};
