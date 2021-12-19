import React from "react";

import { Link } from "./Link";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Base/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>Button</Link>
);

export const link = Template.bind({});
link.args = {
  to: "/",
};
