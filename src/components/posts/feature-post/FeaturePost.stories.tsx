import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { FeaturePost as StoryFeaturePost } from "@/components/posts/feature-post";

export default {
  title: "Posts/Feature Post",
  component: StoryFeaturePost,
} as ComponentMeta<typeof StoryFeaturePost>;

const Template: ComponentStory<typeof StoryFeaturePost> = (args) => (
  <StoryFeaturePost {...args} />
);

export const FeaturePost = Template.bind({});
FeaturePost.args = {
  title: "Union Types and Sortable Relations with GraphCMS",
  date: "23 December 2021",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Apparet statim, quae sint officia, quae actiones. Illis videtur, qui illud non dubitant bonum dicere -; Deinde dolorem quem maximum?",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Apparet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Apparet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Apparet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Apparet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Apparet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Apparet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Apparet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Apparet ",
  tags: [
    {
      label: "React",
    },
    {
      label: "Accessibility",
    },
  ],
};
