import {
  styled,
  Box as MuiBox,
  Typography as MuiTypography,
} from "@mui/material";

export const Box = styled(MuiBox)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.grey["900"],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(1),
}));

export const Typography = styled(MuiTypography)(({ theme }) => ({
  color: theme.palette.grey["100"],
  textAlign: "left",
}));
