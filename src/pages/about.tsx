import { GetServerSideProps, NextPage } from "next";
import { Typography } from "@mui/material";

import { Layout } from "@/components/Layout";

interface Props {
  preview: boolean;
}

const About: NextPage<Props> = (props) => {
  const { preview } = props;

  return (
    <Layout preview={preview}>
      <Typography>ABOUT PAGE</Typography>
    </Layout>
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
