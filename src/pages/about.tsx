import { GetServerSideProps, NextPage } from "next";
import { Typography } from "@mui/material";

import { Page } from "@/components/page";
import { AppShell } from "@/components/headers/app-shell";

interface Props {
  preview: boolean;
}

const About: NextPage<Props> = (props) => {
  const { preview } = props;

  return (
    <Page preview={preview}>
      <AppShell />
      <Typography>ABOUT PAGE</Typography>
    </Page>
  );
};

export default About;

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  return {
    props: {
      preview,
    },
  };
};
