import React from "react";

import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { ThemeSwitch } from "@/components/base/ThemeSwitch";
import { Link } from "@/components/base/Link";
import Path from "@/types/enums/Path";

const AppShell: React.VFC = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky" color="default">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>Piera.Tech</Typography>
        <Link
          sx={{ marginRight: 3, fontWeight: "bold", fontSize: 16 }}
          href={Path.HOME}
        >
          Blog
        </Link>
        <Link
          sx={{ marginRight: 3, fontWeight: "bold", fontSize: 16 }}
          href={Path.ABOUT}
        >
          About
        </Link>
        <ThemeSwitch />
      </Toolbar>
    </AppBar>
  </Box>
);

export { AppShell };
