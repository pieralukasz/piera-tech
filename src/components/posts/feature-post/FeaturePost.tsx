import React from "react";
import { Box } from "./styles";
import {
  Button,
  Card,
  CardContent,
  ChipProps,
  Typography,
} from "@mui/material";

import { GroupTags } from "@/components/tags";

import { useTime } from "@/hooks/useTime";
import { useTheme } from "@/hooks/useTheme";

interface Props {
  title: string;
  tags: ChipProps[];
  date: Date | string;
  content: string;
  description: string;
}

const FeaturePost: React.VFC<Props> = (props) => {
  const { mode, theme } = useTheme();

  const { title, date, tags, content, description } = props;

  const { text: timeText } = useTime({ content, locale: "EN" });

  return (
    <Card>
      <CardContent
        component={Box}
        sx={{
          p: 4,
          backgroundColor:
            mode === "light"
              ? theme.palette.grey["200"]
              : theme.palette.grey["900"],
        }}
      >
        <GroupTags tags={tags} />
        <Typography sx={{ mt: 2 }} variant="h2">
          {title}
        </Typography>
        <Typography sx={{ mt: 1, color: "gray" }}>
          {date} - {timeText}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          {description}
          {"..."}
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          Read
        </Button>
      </CardContent>
    </Card>
  );
};

export { FeaturePost };
