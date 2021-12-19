import { styled } from "@mui/material";

export const Anchor = styled("a")`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.text.primary};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing(1)};
  font-size: 1.125rem;
  transition: color 0.125s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;
