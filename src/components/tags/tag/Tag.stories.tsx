import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tag as StoryTag } from "@/components/tags";

export default {
  title: "Tags/Tag",
  component: StoryTag,
  argTypes: {},
} as ComponentMeta<typeof StoryTag>;

const Template: ComponentStory<typeof StoryTag> = (args) => (
  <StoryTag {...args} />
);

export const Tag = Template.bind({});
Tag.args = {
  label: "Typescript",
};
