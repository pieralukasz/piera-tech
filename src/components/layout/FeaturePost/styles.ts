import { Box as MuiBox, styled } from "@mui/material";

export const Box = styled(MuiBox)`
  width: 100%;
  border-radius: 6px;
  background-color: ${({ theme }) =>
    theme.palette.mode === "light"
      ? theme.palette.grey.A100
      : theme.palette.grey.A400};
  padding: ${({ theme }) => theme.spacing(4)};
`;
