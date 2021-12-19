import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { AppShell as StoryAppShell } from "@/components/headers/app-shell";

export default {
  title: "Headers/App Shell",
  component: StoryAppShell,
  argTypes: {},
} as ComponentMeta<typeof StoryAppShell>;

const Template: ComponentStory<typeof StoryAppShell> = (args) => (
  <StoryAppShell {...args} />
);

export const AppShell = Template.bind({});
AppShell.args = {};
