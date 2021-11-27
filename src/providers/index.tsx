import React from "react";
import ThemeProvider from "./Theme/ThemeProvider";

const Providers: React.FC = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default Providers;
