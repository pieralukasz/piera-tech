import { useContext } from "react";
import { ThemeContext, ThemeContextValue } from "./ThemeProvider";

const useThemeContext = (): ThemeContextValue => useContext(ThemeContext);

export default useThemeContext;
