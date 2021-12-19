import React, { useMemo } from "react";
import * as NextImage from "next/image";

import { RouterContext } from "next/dist/shared/lib/router-context";

import { createDefaultTheme } from "../src/common/theme/theme";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

import ThemeProvider from "../src/providers/Theme/ThemeProvider";

import "../public/fonts/style.css";

const withThemeProvider = (Story, context) => {
  const mode = context.globals?.muiMode;
  const theme = useMemo(() => createDefaultTheme(mode), [mode]);

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider initialTheme={theme}>
        <Story {...context} />
      </ThemeProvider>
    </EmotionThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} alt="" />,
});
