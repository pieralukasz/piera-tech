import React from "react";
import Head from "next/head";
import { Box } from "@mui/material";

import { PreviewHeader } from "@/components/base/PreviewHeader";
import { AppShell } from "@/components/base/AppShell";

import { APP_NAME } from "@/env/config";

interface Props {
  preview: boolean;
}

const Layout: React.FC<Props> = (props) => {
  const { children, preview } = props;

  return (
    <Box>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {preview && <PreviewHeader />}
      <AppShell />
      <Box>{children}</Box>
      {/*  TODO add footer*/}
    </Box>
  );
};

export { Layout };
