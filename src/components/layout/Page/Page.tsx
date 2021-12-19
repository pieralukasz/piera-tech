import React from "react";
import { Container } from "@mui/material";

import { PreviewHeader } from "@/components/layout/PreviewHeader";
import { AppShell } from "@/components/layout/AppShell";

interface Props {
  preview: boolean;
}

const Page: React.FC<Props> = (props) => {
  const { children, preview } = props;

  return (
    <>
      {preview && <PreviewHeader />}
      <AppShell />
      <Container>{children}</Container>
    </>
  );
};

export { Page };
