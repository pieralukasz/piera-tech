import React from "react";
import { Box } from "./styles";
import {
  Button,
  Card,
  CardContent,
  ChipProps,
  Typography,
} from "@mui/material";
import { Tag } from "@/components/base/Tag/Tag";
import { useTime } from "@/hooks/useTime/useTime";

interface Props {
  title: string;
  tags: ChipProps[];
  date: Date | string;
  content: string;
  description: string;
}

const FeaturePost: React.VFC<Props> = (props) => {
  const { title, date, tags, content, description } = props;

  const { text: timeText } = useTime({ content, locale: "EN" });

  return (
    <Card>
      <CardContent component={Box} sx={{ padding: 4 }}>
        <div>
          {tags.map(({ label }, index) => (
            <Tag
              sx={{ marginRight: 1 }}
              key={`${label}_${index}`}
              label={label}
            />
          ))}
        </div>
        <Typography sx={{ marginTop: 2 }} variant="h2">
          {title}
        </Typography>
        <Typography sx={{ marginTop: 1, color: "gray" }}>
          {date} - {timeText}
        </Typography>
        <Typography sx={{ marginTop: 1 }}>
          {description}
          {"..."}
        </Typography>
        <Button variant="contained" sx={{ marginTop: 2 }}>
          Read
        </Button>
      </CardContent>
    </Card>
  );
};

export { FeaturePost };
