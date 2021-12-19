import React from "react";

import { ThemeSwitch as StoryThemeSwitch } from "./ThemeSwitch";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Base/Theme Switch",
  component: StoryThemeSwitch,
} as ComponentMeta<typeof StoryThemeSwitch>;

const Template: ComponentStory<typeof StoryThemeSwitch> = (args) => (
  <StoryThemeSwitch {...args} />
);

export const ThemeSwitch = Template.bind({});
ThemeSwitch.args = {};
