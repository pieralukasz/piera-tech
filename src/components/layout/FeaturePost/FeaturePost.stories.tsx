import React from "react";

import { FeaturePost } from "./FeaturePost";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Layout/Feature Post",
  component: FeaturePost,
} as ComponentMeta<typeof FeaturePost>;

const Template: ComponentStory<typeof FeaturePost> = (args) => (
  <FeaturePost {...args} />
);

export const featurePost = Template.bind({});
featurePost.args = {
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
