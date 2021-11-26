import { NextPage } from "next";
import Head from "next/head";
import { Button } from "@mui/material";
import { Link } from "@/components/atoms/Link";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Me</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Button component={Link} href={"/"}>
        HELLO About
      </Button>
    </div>
  );
};

export default About;
