import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const useTheme = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("No Context");
  }

  return ctx;
};

export default useTheme;
