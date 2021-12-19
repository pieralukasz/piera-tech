import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box } from "@mui/material";

import { WelcomeBox as StoryWelcomeBox } from "@/components/welcome-box";

export default {
  title: "Layout/Welcome Box",
  component: StoryWelcomeBox,
  argTypes: {},
} as ComponentMeta<typeof StoryWelcomeBox>;

const Template: ComponentStory<typeof StoryWelcomeBox> = (args) => (
  <Box sx={{ height: "100vh" }}>
    <StoryWelcomeBox {...args} />
  </Box>
);

export const WelcomeBox = Template.bind({});
WelcomeBox.args = {};
