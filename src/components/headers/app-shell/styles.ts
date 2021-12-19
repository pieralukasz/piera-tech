import { styled, AppBar as MuiAppBar, Typography } from "@mui/material";

import { Link as NextLink } from "@/components/base/link";
import { PINK } from "@/common/colors";

export const AppBar = styled(MuiAppBar)`
  box-shadow: none;
`;

export const Link = styled(NextLink)`
  font-weight: 600;
  margin-right: ${({ theme }) => theme.spacing(2)};
  margin-left: ${({ theme }) => theme.spacing(2)};

  &[aria-current="page"] {
    border-bottom: 0.25em solid ${PINK};
  }
`;

export const MenuLink = styled(NextLink)`
  width: 100%;

  &[aria-current="page"] {
    color: ${PINK};
  }
`;

export const LogoDesktop = styled(Typography)`
  flex-grow: 0.75;
  font-size: 1.25rem;
`;

export const LogoMobile = styled(Typography)`
  flex-grow: 1;
  font-size: 1.25rem;
`;
