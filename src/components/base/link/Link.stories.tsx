import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Link as StoryLink } from "./Link";

export default {
  title: "Base/Link",
  component: StoryLink,
} as ComponentMeta<typeof StoryLink>;

const Template: ComponentStory<typeof StoryLink> = (args) => (
  <StoryLink {...args}>Button</StoryLink>
);

export const Link = Template.bind({});
Link.args = {
  to: "/",
};
