import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { WelcomeHeader } from "./WelcomeHeader";

export default {
  title: "Layout/Welcome Header",
  component: WelcomeHeader,
  argTypes: {},
} as ComponentMeta<typeof WelcomeHeader>;

const Template: ComponentStory<typeof WelcomeHeader> = (args) => (
  <WelcomeHeader {...args} />
);

export const welcomeHeader = Template.bind({});
welcomeHeader.args = {};
