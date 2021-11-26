import React from "react";

interface Props {
  loading: boolean;
}

const PreviewHeader: React.FC<Props> = (props) => {
  const { children, loading } = props;

  return <div>{loading && children}</div>;
};

export { PreviewHeader };
