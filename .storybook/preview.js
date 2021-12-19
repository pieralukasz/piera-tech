import React, { useMemo } from "react";
import * as NextImage from "next/image";

import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

import { createDefaultTheme } from "../src/common/theme";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

import ThemeProvider from "../src/providers/Theme/ThemeProvider";

import "../public/fonts/style.css";

const withThemeProvider = (Story, context) => {
  const mode = context.globals?.muiMode;
  const theme = useMemo(() => createDefaultTheme(mode), [mode]);

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider initialTheme={theme}>
        <MemoryRouterProvider url="/">
          <Story {...context} />
        </MemoryRouterProvider>
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
};

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} alt="" />,
});
