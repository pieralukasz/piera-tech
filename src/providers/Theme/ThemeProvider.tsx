import React, { createContext, useCallback, useMemo, useState } from "react";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  Theme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import { createDefaultTheme } from "@/common/theme/theme";

export interface ThemeContextValue {
  theme: Theme;
  toggleColorMode(): void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: createTheme(),
  toggleColorMode() {},
});

const ThemeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>("light");

  // TODO maybe add this later
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

  const toggleColorMode = useCallback((): void => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo((): Theme => createDefaultTheme(mode), [mode]);

  const value = useMemo(
    (): ThemeContextValue => ({
      theme,
      toggleColorMode,
    }),
    [theme, toggleColorMode]
  );

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
