import React, { useCallback, useMemo } from "react";

import { SwitchProps } from "@mui/material";

import useThemeContext from "@/providers/Theme/useThemeContext";

import { MuiThemeSwitch } from "./styles";

type Props = Omit<SwitchProps, "checked" | "onChange">;

const ThemeSwitch: React.VFC<Props> = (props) => {
  const { toggleColorMode, theme } = useThemeContext();

  const changeTheme = useCallback(() => {
    toggleColorMode();
  }, [toggleColorMode]);

  const isChecked = useMemo(
    () => theme.palette.mode === "dark",
    [theme.palette.mode]
  );

  return (
    <MuiThemeSwitch
      id="theme-switch"
      data-testid="theme-switch"
      onChange={changeTheme}
      checked={isChecked}
      {...props}
      inputProps={{
        "aria-label": `change theme from ${isChecked ? "dark" : "light"} to ${
          !isChecked ? "dark" : "light"
        }`,
      }}
      aria-checked={isChecked}
    />
  );
};

export { ThemeSwitch };
