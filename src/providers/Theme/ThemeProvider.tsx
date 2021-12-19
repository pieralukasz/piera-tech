import React, { createContext, useCallback, useMemo, useState } from "react";
import {
  CssBaseline,
  PaletteMode,
  Theme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import { createDefaultTheme } from "@/common/theme";

export interface ThemeContextValue {
  mode: PaletteMode;
  theme: Theme;
  toggleColorMode(): void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  mode: "light",
  theme: createDefaultTheme("light"),
  toggleColorMode() {},
});

interface ThemeProviderProps {
  initialTheme?: Theme;
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props;

  const [mode, setMode] = useState<PaletteMode>("light");

  // TODO maybe add this later
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

  const toggleColorMode = useCallback((): void => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo((): Theme => createDefaultTheme(mode), [mode]);

  const value = useMemo(
    (): ThemeContextValue => ({
      mode,
      theme,
      toggleColorMode,
    }),
    [mode, theme, toggleColorMode]
  );

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={initialTheme || theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
