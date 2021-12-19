import React, { useCallback, useMemo } from "react";
import { useRouter } from "next/router";

import {
  Toolbar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { ThemeSwitch } from "@/components/base/theme-switch";

import { AppBar, Link, LogoDesktop, LogoMobile, MenuLink } from "./styles";

import { APP_NAME } from "@/env/config";

import Path from "@/types/enums/Path";

const AppShell: React.VFC = () => {
  const { asPath } = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const links = useMemo(() => {
    return [
      {
        name: "Blog",
        path: Path.HOME,
      },
      {
        name: "Courses",
        path: Path.COURSES,
      },
      {
        name: "About",
        path: Path.ABOUT,
      },
    ];
  }, []);

  const handleOpenNavMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    },
    []
  );
  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);

  return (
    <AppBar position="sticky" color="transparent">
      <Container maxWidth="xl" disableGutters>
        <Toolbar
          disableGutters
          sx={{
            p: {
              xs: 2,
              sm: 3,
              md: 4,
              lg: 5,
              xl: 6,
            },
          }}
        >
          <LogoDesktop
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            {APP_NAME}
          </LogoDesktop>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open menu popup"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              aria-expanded={Boolean(anchorElNav)}
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {links.map(({ name, path }) => (
                <MenuItem key={name}>
                  {/*  FIXME Enter doesn't work on link  */}
                  <MenuLink
                    to={path}
                    aria-current={path === asPath ? "page" : false}
                  >
                    {name}
                  </MenuLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LogoMobile
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            {APP_NAME}
          </LogoMobile>
          <Box
            component="nav"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {links.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                aria-current={path === asPath ? "page" : false}
              >
                {name}
              </Link>
            ))}
          </Box>
          <ThemeSwitch />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { AppShell };
