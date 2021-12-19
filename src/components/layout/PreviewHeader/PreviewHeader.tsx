import React from "react";

import { Box, Typography } from "./styles";
import { Link } from "@mui/material";

import Path from "@/types/enums/Path";

const PreviewHeader: React.VFC = () => (
  <Box>
    <Typography>
      You are currently in a preview mode.{" "}
      <Link href={Path.EXIT_PREVIEW}>Click here</Link> to end preview mode.
    </Typography>
  </Box>
);

export { PreviewHeader };
