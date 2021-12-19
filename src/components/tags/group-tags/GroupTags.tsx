import React from "react";
import { Box, ChipProps } from "@mui/material";

import { Tag } from "@/components/tags";

interface Props {
  tags: ChipProps[];
}

const GroupTags: React.VFC<Props> = (props) => {
  const { tags } = props;

  return (
    <Box>
      {tags.map(({ sx, ...tagRest }, index) => (
        <Tag key={index} sx={{ mr: 1, ...sx }} {...tagRest} />
      ))}
    </Box>
  );
};

export { GroupTags };
