import React from "react";
import Image from "next/image";
import { Box, Button, Grid, Typography } from "@mui/material";

import GeeMee from "../../../public/gee_me_001.svg";
import { Link } from "@/components/base/link";
import Path from "@/types/enums/Path";

const WelcomeBox: React.VFC = () => {
  return (
    <Grid container display="flex" sx={{ height: "40%" }}>
      <Grid item xs={2} />
      <Grid
        item
        alignItems="center"
        justifyContent="center"
        sx={{ display: "flex" }}
        xs={5}
      >
        <Box>
          <Typography variant="h1">Hello, happy Journey!</Typography>
          <Typography sx={{ marginTop: 4 }}>
            {`"I couldn't figure out how the seat belt worked. Then it just
            clicked."`}
          </Typography>
          <Box sx={{ marginTop: 4 }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={Path.COURSES}
            >
              Check courses
            </Button>
            <Button
              sx={{ marginLeft: 2 }}
              variant="contained"
              color="secondary"
              component={Link}
              to={Path.ABOUT}
            >
              Who am I?
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={4}
        justifyContent="center"
        alignItems="center"
        sx={{
          display: "flex",
        }}
      >
        <Image width={300} height={300} src={GeeMee} alt="simpson" />
      </Grid>
    </Grid>
  );
};

export { WelcomeBox };
