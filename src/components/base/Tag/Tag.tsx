import React from "react";
import { Chip, ChipProps } from "@mui/material";

const Tag: React.VFC<ChipProps> = (props) => {
  const { label, ...rest } = props;

  return <Chip label={label} {...rest} />;
};

export { Tag };
