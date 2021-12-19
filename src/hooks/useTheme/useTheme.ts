import { useContext } from "react";
import { ThemeContext } from "@/providers/Theme/ThemeProvider";

const useTheme = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("No Context");
  }

  return ctx;
};

export { useTheme };
