import React from "react";

import { ThemeSwitch } from "./ThemeSwitch";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Base/Theme Switch",
  component: ThemeSwitch,
} as ComponentMeta<typeof ThemeSwitch>;

const Template: ComponentStory<typeof ThemeSwitch> = (args) => (
  <ThemeSwitch {...args} />
);

export const themeSwitch = Template.bind({});
themeSwitch.args = {};
