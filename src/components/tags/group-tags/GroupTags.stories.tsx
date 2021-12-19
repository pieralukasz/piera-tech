import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { GroupTags as StoryGroupTags } from "@/components/tags";

export default {
  title: "Tags/Group Tags",
  component: StoryGroupTags,
  argTypes: {},
} as ComponentMeta<typeof StoryGroupTags>;

const Template: ComponentStory<typeof StoryGroupTags> = (args) => (
  <StoryGroupTags {...args} />
);

export const GroupTags = Template.bind({});
GroupTags.args = {
  tags: [
    {
      label: "Typescript",
    },
    {
      label: "React",
    },
  ],
};
