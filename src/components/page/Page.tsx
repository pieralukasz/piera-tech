import React from "react";

import { PreviewHeader } from "@/components/headers/preview-header";

interface Props {
  preview: boolean;
}

const Page: React.FC<Props> = (props) => {
  const { children, preview } = props;

  return (
    <>
      {preview && <PreviewHeader />}
      {children}
    </>
  );
};

export { Page };
